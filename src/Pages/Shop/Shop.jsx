import { useContext, useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import ServicesTab from "../../Components/ServicesTab/ServicesTab";
import serviceBanner from "../../assets/Images/Banner/service-pamper-me-banner.jpg";
import Service from "../../Components/Service/Service";
import { Context } from "../../Providers/PamperContext";
import Product from "../../Components/Product/Product";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
const Shop = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [loading, setLoading] = useState(false);
  const { products, services } = useContext(Context);
  const [active, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {subcategory} = useParams();

  let filteredProducts = products?.filter(
    (product) => product?.category == selectedTab
  );

  const uniqueSubCategories = [
    ...new Set(
      (filteredProducts.length > 0 ? filteredProducts : products)?.map(
        (product) => product.subcategory
      )
    ),
  ];

  const handleNavigate = (subcategory) => {
    if (location.pathname === "/shop") {
      const category = products.find(
        (product) => product.subcategory == subcategory
      ).category;
      navigate(`/shop/${category}/${subcategory}`);
    } else {
      navigate(`/shop/${selectedTab}/${subcategory}`);
    }
  };

  useEffect(() => {
    if (location.pathname == "/shop") {
      filteredProducts = [];
      setSelectedTab([]);
    }
  }, [location.pathname]);

  return (
    <div className="shopProducts">
      <p className="shopProductBanner"></p>
      <ServicesTab
        services={products}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></ServicesTab>
      <div className="shopProduct-grid">
        <div className="filter-container">
          <div className={`filterCategory `}>
            <p onClick ={()=> setActive(!active)}>Filter by category {active ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}</p>
            <div className={`sub-category ${active ? "show":""}`}>
            {uniqueSubCategories?.map((uniqueSubCategory, i) => (
              <div key={i}>
                <button className={`${subcategory ==uniqueSubCategory ?  "isActive" :""}`} onClick={() => handleNavigate(uniqueSubCategory)}>
                  {uniqueSubCategory}
                </button>
              </div>
            ))}
            </div>
          </div>
          <div className="filterPrice">
            <p>Filter by price</p>
            <input type="number" placeholder="From" />
            <input type="number" placeholder="To" />
          </div>
          <button className="filterBtn">Filter</button>
        </div>
        <div className="shopProduct-container">
          {filteredProducts.length > 0 ? (
            <Outlet />
          ) : (
            products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
