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
      <p className='price-button'>
        <p className="product-price">TK. {service.price}</p>
        <button className='cart-btn'>Add to cart</button>
      </p>
    </div>
  );
};

export default Product;
