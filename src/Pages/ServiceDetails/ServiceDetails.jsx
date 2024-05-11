import { useNavigate, useParams } from "react-router-dom";
import "./ServiceDetails.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Providers/PamperContext";

import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Rating from "react-rating";
import AdditionalInformation from "../../Components/ProductDetails/AdditionalInformation";
const ServiceDetails = () => {
  const [user] = useAuthState(auth);
  const { slug } = useParams();
  const { services, setServices } = useContext(Context);
  const service = services?.find((s) => s?.title == slug);
  const navigate = useNavigate();
  const relatedCategory = services?.filter(
    (r) => r?.category == service?.category && r?.title != service?.title
  );
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(service?.img);
  }, [service]);

  return (
    <div className="service-details-container">
      <div className="service-details-content">
        <div className="service-img-container">
          <div className="images">
            {[1, 2, 3, 4].map((_, i) => (
              <img
                key={i}
                src={selectedImage}
                // onClick={() => setSelectedImage(image.src)}
                className={`${i === 0 && "selected-image"}`}
              />
            ))}
          </div>

          <img src={selectedImage} alt="" />
        </div>
        <div className="serviceDetails">
          <h1 className="gradient">{service?.title}</h1>
          <p className="service-details-category">{service?.category}</p>
          <p className="service-details-category">Duration: {service?.duration}</p>
          <p className="service-price">BDT. {service?.price}</p>
          <div className="service-rating">
            <Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              initialRating={4.4}
              fractions={10}
              readonly
            />
          </div>
          <p className="service-details-description">
            {service?.shortDescription}
          </p>
        </div>
      </div>
      <AdditionalInformation product={service} />
    </div>
  );
};

export default ServiceDetails;
