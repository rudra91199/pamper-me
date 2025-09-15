import React from "react";

const ProductDescription = ({ product, service }) => {
  return (
    <div className="product_desc">
      <div>
        <h4>Details</h4>
        {product ? (
          <p className="">{product?.description}</p>
        ) : (
          <p className="service-long-desc">{service?.description}</p>
        )}
      </div>
      <div className={product ? "ingredients" : "benefits"}>
        <h4>
          {product ? "Key Ingredients" : `Benefits for ${service?.title}`}
        </h4>
        {product ? (
          <ul>
            {product?.keyIngredients?.map((ingredients, i) => (
              <li key={i}>
                <span>{ingredients.name}:</span> {ingredients.role}.
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {service.benefits.map((li,i) => (
              <li>{i+1}. {li}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
