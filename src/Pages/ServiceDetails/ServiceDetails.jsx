import { useParams } from "react-router-dom";
import "./ServiceDetails.css";
import { useEffect, useState } from "react";
const ServiceDetails = () => {
  const { title } = useParams();
  const [service, setService] = useState();
  const [services, setServices] = useState([]);
  const [relatedCategory, setRelatedCategory] = useState([]);
  useEffect(() => {
    fetch("/public/service.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data?.find((s) => s?.title == title));
        setServices(data);
      });
  }, []);
  useEffect(() => {
    setRelatedCategory(
      services?.filter(
        (r) => r.category == service.category && r.title != service.title
      )
    );
  }, [service]);
  return (
    <div className="service-details">
      <div>
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
        <p style={{ textAlign: "center", fontWeight: "bold", margin: "40px" }}>
          HOW TO USE
        </p>
        <div
          className="steps"
          dangerouslySetInnerHTML={{ __html: service?.steps }}
        />
      </div>
      <div className="relatedServices">
        <p className="recomendedTitle">Recomended for you</p>
        <div className="underline"></div>
        <div className="relatedServices-container">
          <div>
            {relatedCategory.map((related) => (
              <div key={related.title} className="relatedService">
                <div className="relatedImg">
                  <img src={related?.img} alt="" />
                </div>
                <div className="relatedDetails">
                  <p style={{fontSize:"14px"}}>{related?.title}</p>
                  <div style={{ color: "#e32085", fontWeight: "bold" }}>
                    BDT {related?.price}
                  </div>
                  <button className="bookBtn">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
