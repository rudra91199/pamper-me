import { useContext, useRef, useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import ServicesTab from "../../Components/ServicesTab/ServicesTab";
import serviceBanner from "../../assets/Images/Banner/service-pamper-me-banner.jpg";
import Service from "../../Components/Service/Service";
import { Context } from "../../Providers/PamperContext";
import Product from "../../Components/Product/Product";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import sortIcon from "../../assets/Images/icons/sort.png";
import axios from "axios";
import Search from "../../Components/Search/Search";
const Shop = () => {
  const { products, services, setProducts } = useContext(Context);

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
  const selectRef = useRef();

  useEffect(() => {
    // `http://localhost:5000/getProductsByCategory?${category && `category=${category}`}&${subcategory && `subcategory=${subcategory}`}`

    if (category || subcategory || brand) {
      axios
        .get(
          `http://localhost:5000/getProductsByCategory?category=${
            category || ""
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

    // fetch(
    //   `http://localhost:5000/getProductsByCategory?category=${category}&subcategory=${subcategory}&Brand=${brand}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if(category && subcategory)
    //     setSubProducts(data);
    //   else
    //     setFilterProducts(data);
    //   });
    // }
  }, [category, subcategory, brand]);

  const uniqueBrands = [...new Set(products.map((product) => product.Brand))];
  const uniqueCategory = [
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    
    if (selectRef?.current?.value == '' ) {
      if (brandProducts.length > 0 && category == "all") {
        setUniqueSubcategory([
          ...new Set(brandProducts.map((product) => product.subcategory)),
        ]);
      } else if (subcategory) {
        let filteredSub = [];
        products.forEach((product) => {
          if (product.category == category) {
            filteredSub.push(product.subcategory);
          }
        });
        setUniqueSubcategory([...new Set(filteredSub)]);
      } else {
        setUniqueSubcategory([
          ...new Set(
            (filteredProducts.length > 0 ? filteredProducts : products).map(
              (product) => product.subcategory
            )
          ),
        ]);
        setSubProducts([]);
      }
    }
  }, [
    subcategory,
    filteredProducts,
    products,
    brandProducts,
    selectRef
  ]);

  const handleNavigate = (subcategory) => {
    if (location.pathname === "/shop") {
      const category = products.find(
        (product) => product.subcategory == subcategory
      ).category;
      navigate(`/shop/${category}/${subcategory}`);
    } else if (brand) {
      const category = products.find(
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
      if (sort === "lowToHigh") {
        const sortedProduct = products.sort((a, b) => a.price - b.price);
        setProducts([...sortedProduct]);
      } else {
        const sortedProduct = products.sort((a, b) => b.price - a.price);
        setProducts([...sortedProduct]);
      }
    }
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

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
            <input type="number" placeholder="From" />
            <input type="number" placeholder="To" />
          </div>
          <button className="filterBtn">Filter</button>
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
              products?.map((product) => (
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
