/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import "./Product.css";
import { useContext } from "react";
import { Context } from "../../Providers/PamperContext";
import { addToDb } from "../../Utilities/CartDb";

const Product = ({ product }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, setCart, isCartOpen, setIsCartOpen } = useContext(Context);

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
    <div className={`productCard ${location.pathname === "/" ? "" : "shop-product"}`}>
      <img
        src={product?.images[0]?.src}
        alt=""
        onClick={() => navigate(`/product/${product?.name}`)}
      />
      <div>
        <p className="product-title">{product?.name}</p>
        <div className="categories">
          <span>{product?.category}</span>
          <span>{product?.subcategory}</span>
          <span>{product?.Brand}</span>
        </div>
        <p className="product-desc">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          possimus exercitationem.
        </p>
        <div className="price-button">
          <p className="product-price">TK. {product?.price}</p>
          <button
            onClick={() => {
              handleAddToCart(product);
              setIsCartOpen(true);
            }}
            className="cart-btn"
          >
           <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg> Add to cart 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
