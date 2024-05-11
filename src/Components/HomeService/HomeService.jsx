/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./HomeService.css";

const HomeService = ({ service }) => {
  const navigate = useNavigate();
  return (
    <div className="homeServiceCard">
      <img src={service.img} alt="" />
      <div>
        <p className="homeService-title gradient">{service?.title}</p>
        <p className="home-service-category">
          {service.category.toUpperCase()}
        </p>
        <p className="service-desc">{service.shortDescription.slice(0,65) + "..."}</p>
        <p className="home-service-price">BDT <span className="font">{service.price}</span></p>
        <button className="bg-gradient" onClick={() => navigate(`/service/${service?.title}`)}>Read More...</button>
      </div>
    </div>
  );
};

export default HomeService;
