import { useNavigate } from "react-router-dom";
import "./Service.css"
const Service = ({ service }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/service/${service?.title}`)} className="serviceCard">
      <div className="serviceCard-img-container">
      <img
        src={service?.img}
        alt=""
      />
      </div>
      <div className="serviceCard-content">
        <p className="service-category">{service?.category?.toUpperCase()}</p>
        <p className="service-title">{service?.title}</p>
        <div>
          <p className="serviceCard-time">Duration <span className="font">{service?.duration}</span> Min</p>
          <p className="serviceCard-price">BDT <span className="font">{service?.price}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Service;