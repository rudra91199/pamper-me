import { useEffect, useState } from "react";
import './PopularProducts.css'
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
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          color:"#e32085"
        }}
      >
        Popular Products
      </h2>
      <div className="home-products-container">
        {services.slice(0, 3).map((service) => (
          <Product key={service?.name} service={service}>
            {" "}
          </Product>
        ))}
      </div>
      <Link style={{color:"#e32085"}}>View All Products</Link>
    </div>
  );
};

export default PopularProducts;
