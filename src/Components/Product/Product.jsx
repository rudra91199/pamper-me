/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
const location = useLocation();
console.log(location)
  return (
    <div className={`productCard ${location.pathname ==="/"?"width-350":"product-border"}`}>
      <p className="product-title">{product?.title}</p>
      <img
        src={product?.img}
        alt=""
      />
      <p className="product-category">{product?.category.toUpperCase()}</p>
      <p className="product-desc">{product?.shortDescription}</p>
      <p className='price-button'>
        <p className="product-price">TK. {product?.price}</p>
        <button className='cart-btn'>Add to cart</button>
      </p>
    </div>
  );
};

export default Product;
