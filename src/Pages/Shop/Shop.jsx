import { useContext, useRef, useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import ServicesTab from "../../Components/ServicesTab/ServicesTab";

import { Context } from "../../Providers/PamperContext";
import Product from "../../Components/Product/Product";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import sortIcon from "../../assets/Images/icons/sort.png";
import axios from "axios";

const Shop = () => {
  const { products, services, setProducts, setRoutes } = useContext(Context);

  const [selectedTab, setSelectedTab] = useState(null);
  const [active, setActive] = useState({
    category: false,
    brand: false,
  });
  const [filteredProducts, setFilterProducts] = useState([]);
  const [subProducts, setSubProducts] = useState([]);
  const [brandProducts, setBrandProducts] = useState([]);

  const { category, subcategory, brand } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const selectRef = useRef();

  useEffect(() => {

    if (category || subcategory || brand) {
      axios
        .get(
          `http://pamper-me-backend.vercel.app/api/products/getProductsByCategory?category=${category || ""
          }&subcategory=${subcategory || ""}&Brand=${brand || ""}`
        )
        .then((res) => {
          if (category && subcategory && brand) {
            setBrandProducts(res.data);
            setSubProducts([]);
            setFilterProducts([]);
          } else if (category && subcategory) {
            setFilterProducts([]);
            setBrandProducts([]);
            setSubProducts(res.data);
          } else {
            setFilterProducts(res.data);
            setBrandProducts([]);
            setSubProducts([]);
          }
        });
    }
    setRoutes({ category, subcategory, brand });


  }, [category, subcategory, brand]);

  const handleNavigate = (subcategory) => {
    if (location.pathname === "/shop") {
      const category = products.products.find(
        (product) => product.subcategory == subcategory
      ).category;
      navigate(`/shop/${category}/${subcategory}`);
    } else if (brand) {
      const category = products.products.find(
        (product) => product.subcategory == subcategory
      ).category;
      navigate(`/shop/${category}/${subcategory}/${brand}`);
    } else {
      navigate(`/shop/${selectedTab}/${subcategory}`);
    }
  };

  const handleBrandNavigate = (subBrand) => {
    navigate(
      `/shop/${category || "all"}/${subcategory || "brand"}/${subBrand}`
    );
  };

  const handleSorting = (sort) => {
    if (brandProducts.length > 0) {
      if (sort === "lowToHigh") {
        const sortedProduct = brandProducts.sort((a, b) => a.price - b.price);
        setBrandProducts([...sortedProduct]);
      } else {
        const sortedProduct = brandProducts.sort((a, b) => b.price - a.price);
        setBrandProducts([...sortedProduct]);
      }
    } else if (subProducts.length > 0) {
      if (sort === "lowToHigh") {
        const sortedProduct = subProducts.sort((a, b) => a.price - b.price);
        setSubProducts([...sortedProduct]);
      } else {
        const sortedProduct = subProducts.sort((a, b) => b.price - a.price);
        setSubProducts([...sortedProduct]);
      }
    } else if (filteredProducts.length > 0) {
      if (sort === "lowToHigh") {
        const sortedProduct = filteredProducts.sort(
          (a, b) => a.price - b.price
        );
        setFilterProducts([...sortedProduct]);
      } else {
        const sortedProduct = filteredProducts.sort(
          (a, b) => b.price - a.price
        );
        setFilterProducts([...sortedProduct]);
      }
    } else {
      const { uniqueBrand, uniqueCategory, uniqueSubCategory } = products;
      if (sort === "lowToHigh") {
        const sortedProduct = products.products.sort(
          (a, b) => a.price - b.price
        );
        setProducts({
          products: sortedProduct,
          uniqueBrand,
          uniqueCategory,
          uniqueSubCategory,
        });
      } else {
        const sortedProduct = products.products.sort(
          (a, b) => b.price - a.price
        );
        setProducts({
          products: sortedProduct,
          uniqueBrand,
          uniqueCategory,
          uniqueSubCategory,
        });
      }
    }
  };

  const handleFilerByPrice = (e) => {
    e.preventDefault();
    const min = e.target.min.value || 0;
    const max = e.target.max.value || 9999;

    if (brandProducts.length > 0) {
      const filteredProductsByPrice = brandProducts.filter(
        (product) => product.price > min && product.price < max
      );
      setBrandProducts([...filteredProductsByPrice]);
    } else if (subProducts.length > 0) {
      const filteredProductsByPrice = subProducts.filter(
        (product) => product.price > min && product.price < max
      );
      setSubProducts([...filteredProductsByPrice]);
    } else if (filteredProducts.length > 0) {
      const filteredProductsByPrice = filteredProducts.filter(
        (product) => product.price > min && product.price < max
      );
      setFilterProducts([...filteredProductsByPrice]);
    } else {
      const { uniqueBrand, uniqueCategory, uniqueSubCategory } = products;
      const filteredProductsByPrice = products.products.filter(
        (product) => product.price > min && product.price < max
      );
      setProducts({
        products: filteredProductsByPrice,
        uniqueBrand,
        uniqueCategory,
        uniqueSubCategory,
      });
    }
  };

  useEffect(() => {
    if (location.pathname == "/shop") {
      setFilterProducts([]);
      setSelectedTab([]);
      setBrandProducts([]);
    }
    selectRef.current.value = "";
  }, [location.pathname]);

  return (
    <div className="shopProducts">
      <p className="shopProductBanner"></p>
      <ServicesTab
        services={products.uniqueCategory}
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
              {products?.uniqueSubCategory?.map((uniqueSubCategory, i) => (
                <div key={i}>
                  <button
                    className={`${subcategory == uniqueSubCategory ? "isActive" : ""
                      }`}
                    onClick={() => handleNavigate(uniqueSubCategory)}
                  >
                    {uniqueSubCategory}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={`filterCategory `}>
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
              {products?.uniqueBrand?.map((uniqueBrand, i) => (
                <div key={i}>
                  <button
                    className={`${brand == uniqueBrand ? "isActive" : ""}`}
                    onClick={() => handleBrandNavigate(uniqueBrand)}
                  >
                    {uniqueBrand}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="filterPrice">
            <p>Filter by price</p>
            <form action="" onSubmit={handleFilerByPrice}>
              <input type="number" placeholder="From" name="min" />
              <input type="number" placeholder="To" name="max" />
              <button className="filterBtn" type="submit">
                Filter
              </button>
            </form>
          </div>
        </div>

        <div>
          <div className="sorting">
            <div>
              {category && category.toUpperCase()}{" "}
              {subcategory && " > " + subcategory.toUpperCase()}{" "}
              {brand && " > " + brand.toUpperCase()}
            </div>
            <div>
              <img src={sortIcon} alt="" height={23} />
              <select
                ref={selectRef}
                name=""
                id=""
                onChange={(e) => handleSorting(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="lowToHigh">Price Low To High</option>
                <option value="HighToLow">Price High To Low</option>
              </select>
            </div>
          </div>

          <div className="shopProduct-container">
            {brandProducts.length > 0 ||
              subcategory?.length > 0 ||
              filteredProducts?.length > 0 ? (
              <Outlet
                context={{ filteredProducts, subProducts, brandProducts }}
              />
            ) : (
              products?.products?.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
