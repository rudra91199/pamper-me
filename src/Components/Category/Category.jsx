import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useState } from "react";

const Category = () => {
  const [filteredProducts, setFilterProducts] = useState([]);
   const [subProducts, setSubProducts] = useState([]);
  const {category, subcategory} = useParams()

  useEffect(() =>{
      fetch(`https://pamper-me-backend.vercel.app/getProductsByCategory?category=${category}`)
    .then(res => res.json())
    .then(data => setFilterProducts(data));
  },[category]);

  useEffect(() =>{
    if(subcategory){
      setSubProducts(filteredProducts?.filter(product => product.subcategory === subcategory))
    }
  },[subcategory,filteredProducts]);

  return <>
    {(subProducts.length > 0 ? subProducts:filteredProducts)?.map(
            (product) => (
              <Product key={product._id} product={product}></Product>
            )
          )}
  </>;
};

export default Category;
