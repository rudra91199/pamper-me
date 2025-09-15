import { useNavigate } from "react-router-dom";
import "./Service.css";
import { FaEye } from "react-icons/fa";
import { BsImages } from "react-icons/bs";

const Service = ({ service, setImages }) => {
  console.log(service);
  const navigate = useNavigate();
  const { images } = service;
  const viewImages = (e, image) => {
    e.stopPropagation();
    setImages({ images: images, selectedImage: image });
  };
  return (
    <div
      onClick={() => navigate(`/service/${service?.title}`)}
      className="serviceCard"
    >
      <div className="serviceCard-img-container">
        <img src={service?.images[0].url} alt="" />
        <div className="service-card-img-overlay">
          <div>
            <button>
              <FaEye />
            </button>
            <button onClick={(e) => viewImages(e, service?.images[0]?.url)}>
              <BsImages />
            </button>
          </div>
        </div>
      </div>
      <div className="serviceCard-content">
        <p className="service-category">{service?.category?.toUpperCase()}</p>
        <p className="service-title">{service?.title}</p>
        <div>
          <p className="serviceCard-time">
            Duration <span className="font">{service?.duration}</span> Min
          </p>
          <p className="serviceCard-price">
            BDT <span className="font">{service?.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
