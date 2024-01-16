import { useParams } from "react-router-dom";
import "./ServiceDetails.css";
import { useEffect, useState } from "react";
const ServiceDetails = () => {
  const { title } = useParams();
  const [service, setService] = useState();
  useEffect(() => {
    fetch("../../../public/service.json")
      .then((res) => res.json())
      .then((data) => setService(data?.find((s) => s?.title == title)));
  }, []);
  return (
    <div className="service-details">
      <div className="service-details-container">
        <div className="img-container">
          <img src={service?.img} />
        </div>
        <div className="details">
          <h1>{service?.title}</h1>
          <p className="category">{service?.category}</p>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: service?.longDescription }}
          />
          <div style={{ display: "flex", gap: "40px" }}>
            <p className="duration">{service?.duration}</p>
            <p className="price">BDT. {service?.price}</p>
          </div>
          <button className="book-btn">BOOK NOW</button>
        </div>
      </div>
      <p style={{textAlign:"center",fontWeight:"bold",margin:"40px"}}>HOW TO USE</p>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: service?.steps }}
      />
    </div>
  );
};

export default ServiceDetails;
