/* eslint-disable react/prop-types */
import "./HomeService.css";

const HomeService = ({ service }) => {
  return (
    <div className="homeServiceCard">
      <p className="homeService-title">{service?.title}</p>
      <img
        src={service.img}
        alt=""
      />
      <p className="home-service-category">{service.category.toUpperCase()}</p>
      {/* <p className="service-desc">{service.shortDescription}</p> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "absolute",
          bottom: "10px",
        }}
      >
        <p className="home-service-time">{service.duration}</p>
        <p className="home-service-price">TK. {service.price}</p>
      </div>
    </div>
  );
};

export default HomeService;
