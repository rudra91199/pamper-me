import React from "react";

const ProductDescription = ({ product, service }) => {
  return (
    <div className="product_desc">
      <div>
        <h4>Details</h4>
        {product ? (
          <p className="">{product?.description}</p>
        ) : (
          <p className="service-long-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, temporibus laborum quas ab error maxime soluta
            expedita sint consectetur dolorum rerum veniam aspernatur suscipit
            atque aperiam sequi architecto repellendus officiis nesciunt. Ut
            dignissimos itaque illum provident porro deserunt reprehenderit
            magni, nemo expedita minus perferendis tempore eveniet saepe dolorem
            delectus fuga.
          </p>
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
            {[1, 2, 3, 4,5].map((li) => (
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
