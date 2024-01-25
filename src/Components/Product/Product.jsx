/* eslint-disable react/prop-types */
import './Product.css'
const Product = ({ product }) => {
  return (
    <div className="productCard">
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
