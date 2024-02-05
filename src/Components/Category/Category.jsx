import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useState } from "react";

const Category = () => {
 const {subProducts, filteredProducts} = useOutletContext()

 console.log(filteredProducts)

  return <>
    {(subProducts.length > 0 ? subProducts: filteredProducts)?.map(
            (product) => (
              <Product key={product._id} product={product}></Product>
            )
          )}
  </>;
};

export default Category;
