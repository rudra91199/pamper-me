/* eslint-disable react/prop-types */
import "./HomeService.css";

const HomeService = ({ service }) => {
  return (
    <div className="serviceCard">
      <p className="service-title">{service?.title}</p>
      <img
        src={service.img}
        alt=""
      />
      <p className="service-category">{service.category.toUpperCase()}</p>
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
        <p className="service-time">{service.duration}</p>
        <p className="service-price">TK. {service.price}</p>
      </div>
    </div>
  );
};

export default HomeService;
