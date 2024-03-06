import { useNavigate } from "react-router-dom";
import "./Service.css"
const Service = ({service}) => {
  const navigate = useNavigate()
  console.log(service)
    return (
        <div onClick={()=>navigate(`/service/${service?.title}`)} className="serviceCard">
        <p className="service-title">{service?.title}</p>
        <img
          src={service?.img}
          alt=""
        />
        <p className="service-category">{service?.category?.toUpperCase()}</p>
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
          <p className="service-time">{service?.duration}</p>
          <p className="service-price">TK. {service?.price}</p>
        </div>
      </div>
    );
};

export default Service;