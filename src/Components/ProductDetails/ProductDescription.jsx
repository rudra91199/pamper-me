import React from "react";

const ProductDescription = ({ product }) => {
  return (
    <div className="product_desc">
      <div>
        <h4>Details</h4>
      <p className="">{product?.description}</p>
      </div>
      <div className="ingredients">
        <h4>Key Ingredients</h4>
        {product?.keyIngredients?.map((ingredients, i) => (
          <li key={i}>
            <span>{ingredients.name}:</span> {ingredients.role}.
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
