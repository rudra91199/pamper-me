import { useEffect, useState } from "react";
import "./PopularProducts.css";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const PopularProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="products">
      <h2>
        Popular Products
      </h2>
      <div className="home-products-container">
        {services.slice(0, 3).map((service) => (
          <Product key={service?.name} service={service}>
          </Product>
        ))}
      </div>
      <button className="all-product-btn">
        <Link>View All Products</Link>
      </button>
    </div>
  );
};

export default PopularProducts;
