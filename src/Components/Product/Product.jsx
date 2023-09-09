/* eslint-disable react/prop-types */
import './Product.css'
const Product = ({ service }) => {
  return (
    <div className="productCard">
      <p className="product-title">{service?.title}</p>
      <img
        src={service.img}
        alt=""
      />
      <p className="product-category">{service.category.toUpperCase()}</p>
      <p className="product-desc">{service.shortDescription}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "absolute",
          bottom: "10px",
        }}
      >
        <p className="product-price">TK. {service.price}</p>
      </div>
    </div>
  );
};

export default Product;
