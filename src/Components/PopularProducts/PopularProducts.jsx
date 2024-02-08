import { useContext, useEffect, useState } from "react";
import "./PopularProducts.css";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import { Context } from "../../Providers/PamperContext";

const PopularProducts = () => {
  const {products} = useContext(Context);

  return (
    <div className="products">
      <h2>
        Popular Products
      </h2>
      <div className="home-products-container">
        {products?.products?.slice(0, 3).map((product) => (
          <Product key={product?.name} product={product}>
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
