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
  const { products, services } = useContext(Context);

  const [selectedTab, setSelectedTab] = useState(null);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState({
    category: false,
    brand: false,
  });
  const [filteredProducts, setFilterProducts] = useState([]);
  const [subProducts, setSubProducts] = useState([]);
  const [brandProducts, setBrandProducts] = useState([]);
  const [uniqueSubcategory, setUniqueSubcategory] = useState([]);

  const { category, subcategory, brand } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // `http://localhost:5000/getProductsByCategory?${category && `category=${category}`}&${subcategory && `subcategory=${subcategory}`}`
 
      if(category || subcategory || brand){
        fetch(
          `http://localhost:5000/getProductsByCategory?category=${category}&subcategory=${subcategory}&Brand=${brand}`
        )
          .then((res) => res.json())
          .then((data) => {
            if(category && subcategory)
            setSubProducts(data);
          else
            setFilterProducts(data);
          });
      }
  }, [category, subcategory, brand]);

  console.log(category,subcategory)
  console.log(subProducts.length);


  const uniqueBrands = [
    ...new Set(
       products.map(
        (product) => product.Brand
      )
    ),
  ];
  const uniqueCategory = [
    ...new Set(
       products.map(
        (product) => product.category
      )
    ),
  ];

  useEffect(() => {

    if(subcategory){
      let filteredSub = [];
      products.forEach(
       (product) => {
        if(product.category == category){
          filteredSub.push(product.subcategory)
        }
      }
      )
      setUniqueSubcategory([...new Set(filteredSub)])
    }
    else{
      setUniqueSubcategory([
        ...new Set(
           (filteredProducts.length > 0 ? filteredProducts : products).map(
            (product) => product.subcategory
          )
        ),
      ]);
      console.log(uniqueSubcategory)
      setSubProducts([]);

     }
    
  }, [subcategory, filteredProducts,products]);


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
      setFilterProducts([]);
      setSelectedTab([]);
    }
  }, [location.pathname]);

  console.log(uniqueSubcategory)

  return (
    <div className="shopProducts">
      <p className="shopProductBanner"></p>
      <ServicesTab
        services={uniqueCategory}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></ServicesTab>
      <div className="shopProduct-grid">
        <div className="filter-container">
          <div className={`filterCategory `}>
            <p
              onClick={() =>
                setActive({
                  category: !active.category,
                  brand: active.brand,
                })
              }
            >
              Filter by category{" "}
              {active.category ? (
                <i class="fa-solid fa-minus"></i>
              ) : (
                <i class="fa-solid fa-plus"></i>
              )}
            </p>
            <div className={`sub-category ${active.category ? "show" : ""}`}>
              {uniqueSubcategory?.map((uniqueSubCategory, i) => (
                <div key={i}>
                  <button
                    className={`${
                      subcategory == uniqueSubCategory ? "isActive" : ""
                    }`}
                    onClick={() => handleNavigate(uniqueSubCategory)}
                  >
                    {uniqueSubCategory}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={`filterCategory `} style={{ marginTop: 20 }}>
            <p
              onClick={() =>
                setActive({
                  category: active.category,
                  brand: !active.brand,
                })
              }
            >
              Filter by Brands{" "}
              {active.brand ? (
                <i class="fa-solid fa-minus"></i>
              ) : (
                <i class="fa-solid fa-plus"></i>
              )}
            </p>
            <div className={`sub-category ${active.brand ? "show" : ""}`}>
              {uniqueBrands?.map((uniqueBrand, i) => (
                <div key={i}>
                  <button
                    className={`${brand == uniqueBrand ? "isActive" : ""}`}
                    onClick={() => handleNavigate(uniqueBrand)}
                  >
                    {uniqueBrand}
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
          {
            (subcategory?.length> 0 || filteredProducts?.length > 0) ? (
            <Outlet context={{ filteredProducts ,subProducts}} />
            ) : (
              products?.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Shop;
