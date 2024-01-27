/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom';
import './Product.css'
import { useContext } from 'react';
import { Context } from '../../Providers/PamperContext';
import { addToDb } from '../../Utilities/CartDb';
const Product = ({ product }) => {
const location = useLocation();
const navigate = useNavigate();
const { cart, setCart } = useContext(Context);

const handleAddToCart = (item) => {
  let newCart = [];
  const exists = cart.find((product) => product._id == item._id);
  if (!exists) {
    item.quantity = 1;
    newCart = [...cart, item];
  } else {
    item.quantity = exists.quantity + 1;
    const rest = cart.filter((product) => product._id !== item._id);
    newCart = [...rest, item];
  }
  setCart(newCart);
  addToDb(item._id);


};
  return (
    <div className={`productCard ${location.pathname ==="/"?"width-350":"product-border"}`}>
      <p className="product-title">{product?.title}</p>
      <img
        src={product?.img}
        alt=""
        onClick={()=>navigate(`/product/${product?.title}`)}
      />
      <p className="product-category">{product?.category.toUpperCase()}</p>
      <p className="product-desc">{product?.shortDescription}</p>
      <p className='price-button'>
        <p className="product-price">TK. {product?.price}</p>
        <button onClick={()=>handleAddToCart(product)} className='cart-btn'>Add to cart</button>
      </p>
    </div>
  );
};

export default Product;
