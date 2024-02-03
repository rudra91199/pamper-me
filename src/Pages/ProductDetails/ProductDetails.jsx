import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../Providers/PamperContext";
import BookingModal from "../../Components/BookingModal/BookingModal";
import Product from "./../../Components/Product/Product";
import { addToDb } from "../../Utilities/CartDb";
const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(Context);
  const product = products?.find((p) => p?.title == slug);
  const navigate = useNavigate();
  const relatedCategory = products?.filter(
    (r) => r?.category == product?.category && r?.title != product?.title
  );
  const handleAddToCart = (item) => {
    let newCart = [];
    const exists = cart.find((product) => product?._id == item._id);
    if (!exists) {
      item.quantity = quantity;
      newCart = [...cart, item];
    } else {
      item.quantity = exists.quantity + quantity;
      const rest = cart.filter((product) => product?._id !== item._id);
      newCart = [...rest, item];
    }
    setCart(newCart);
    addToDb(item._id, quantity);

  };

  return (
    <div className="product-details-grid">
      <div>
        <div className="product-details-container">
          <div className="product-img-container">
            <img src={product?.img} />
          </div>
          <div className="productDetails">
            <h1>{product?.title}</h1>
            <p className="product-details-category">{product?.category}</p>
            <div
              className="product-details-description"
              dangerouslySetInnerHTML={{ __html: product?.longDescription }}
            />
            <p className="product-price">BDT. {product?.price}</p>
            <div style={{display:"flex",gap:"20px"}}>
            <button onClick={() => handleAddToCart(product)} className="buy-btn">ADD TO CART</button>
            <button className="buy-btn">BUY NOW</button>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center", fontWeight: "bold", margin: "40px" }}>
          HOW TO USE
        </p>
        <div
          className="productSteps"
          dangerouslySetInnerHTML={{ __html: product?.taskDescription1 }}
        />
        <div
          className="productSteps"
          dangerouslySetInnerHTML={{ __html: product?.taskDescription2 }}
        />
        <div
          className="productSteps"
          dangerouslySetInnerHTML={{ __html: product?.taskDescription3 }}
        />
      </div>
      <div className="relatedProducts">
        <p className="recomendedTitle">Recomended for you</p>
        <div className="underline"></div>
        <div className="relatedProduct-container">
          <div>
            {relatedCategory.map((related) => (
              <div key={related.title} className="relatedProduct">
                <div className="relatedProductImg">
                  <img src={related?.img} alt="" />
                </div>
                <div className="relatedProductDetails">
                  <p style={{ fontSize: "14px" }}>{related?.title}</p>
                  <div style={{ color: "#e32085", fontWeight: "bold" }}>
                    BDT {related?.price}
                  </div>
                  <button
                    onClick={() => navigate(`/product/${related?.title}`)}
                    className="viewBtn"
                  >
                    VIEW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
