import React, { useContext, useState } from "react";
import Rating from "react-rating";
import { Context } from "../../Providers/PamperContext";
import axios from "axios";
import { format } from "date-fns";

const ProductReviews = ({ product }) => {
  const { userData } = useContext(Context);
  const [rating, setRating] = useState(0);
  const handleAddReview = async (e) => {
    e.preventDefault();
    const reviewData = {
      image: userData?.image?.url,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      review: e.target.review.value,
      date: new Date(),
      email: userData?.email,
      rating,
    };

    console.log(reviewData);

    const { data } = await axios.put(
      `http://localhost:5000/api/products/addReview/${product._id}`,
      reviewData
    );
  };
  return (
    <div className="product-reviews">
      <h3>{product?.reviews?.length} Review for {product?.name}</h3>
      <div className="reviews">
        {product?.reviews?.map((review, i) =><div key={i} className="review">
          <img
            src={review.image}
            alt=""
            className="review-img"
          />
          <div>
            <div className="review-rating">
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                initialRating={review.rating}
                fractions={10}
                readonly
              />
            </div>
            <p className="review-name">
              <span>{review.firstName} {review.lastName}</span> - {format(review.date, "MMMM dd, yyyy")}
            </p>
            <p>
              {review.review}
            </p>
          </div>
        </div>
)}
      </div>

      {/* add review */}
      <div className="add-review">
        <h4>Add a review</h4>
        <form action="" onSubmit={handleAddReview}>
          <p>Your Rating*</p>
          <div className="add-rating">
            <Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              fractions={10}
              onChange={(rate) => {
                setRating(rate);
              }}
              initialRating={rating}
            />
          </div>
          <textarea
            name="review"
            id=""
            placeholder="Your Review*"
            required
          ></textarea>
          <div className="user-name">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              defaultValue={userData?.firstName}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              defaultValue={userData?.lastName}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;
