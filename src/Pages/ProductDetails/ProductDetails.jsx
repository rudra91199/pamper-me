import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../Providers/PamperContext";
import { FiMinus, FiPlus } from "react-icons/fi";

import { addToDb } from "../../Utilities/CartDb";
import Rating from "react-rating";
const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(Context);
  const product = products?.products?.find((p) => p?.name == slug);
  const [selectedImage, setSelectedImage] = useState("");
  const [counter, setCounter] = useState(1);

  console.log(product);

  const navigate = useNavigate();
  const relatedCategory = products?.products?.filter(
    (r) => r?.category == product?.category && r?.name != product?.name
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

  useEffect(() => {
    setSelectedImage(product?.images[0]?.src);
  }, [product]);

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="product-img-container">
          <div className="images">
            {product?.images?.map((image, i) => (
              <img
                key={i}
                src={image.src}
                onClick={() => setSelectedImage(image.src)}
                className={`${selectedImage === image.src && "selected-image"}`}
              />
            ))}
          </div>

          <img src={selectedImage} alt="" />
        </div>
        <div className="productDetails">
          <h1 className="gradient">{product?.name}</h1>
          <p className="product-details-category">{product?.category}</p>
          <p className="product-price">BDT. {product?.price}</p>
          <div className="product-rating">
            <Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              initialRating={4.4}
              fractions={10}
            />
          </div>
          <p className="product-details-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            maxime delectus nulla repellat aliquid, aperiam inventore, eaque,
            ullam numquam tenetur voluptate itaque molestiae. Ad eos ipsa ex
            recusandae aliquid, nobis illo at fugiat.
          </p>
          <div className="add-to-cart">
            <div className="quantity">
              <button
                onClick={() => setCounter(counter - 1)}
                disabled={counter <= 1}
              >
                {" "}
                <FiMinus />
              </button>
              <p>{counter}</p>
              <button onClick={() => setCounter(counter + 1)}>
                <FiPlus />
              </button>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="buy-btn"
            >
              ADD TO CART
            </button>
            <button className="buy-btn">BUY NOW</button>
          </div>
          <p className="sku">
            SKU: <span className="font">{product.sku}</span>
          </p>
          <p className="tags">TAGS: FASHION / WOMAN</p>
        </div>
      </div>
      {/* <div className="relatedProducts">
        <p className="recomendedTitle">Recomended for you</p>
        <div className="underline"></div>
        <div className="relatedProduct-container">
          <div>
            {relatedCategory?.map((related) => (
              <div key={related.name} className="relatedProduct">
                <div className="relatedProductImg">
                  <img src={related?.images[0].src} alt="" />
                </div>
                <div className="relatedProductDetails">
                  <p style={{ fontSize: "14px" }}>{related?.name}</p>
                  <div style={{ color: "#e32085", fontWeight: "bold" }}>
                    BDT {related?.price}
                  </div>
                  <button
                    onClick={() => navigate(`/product/${related?.name}`)}
                    className="viewBtn"
                  >
                    VIEW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetails;
