import { useNavigate, useParams } from "react-router-dom";
import "./ServiceDetails.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../Providers/PamperContext";
import BookingModal from "../../Components/BookingModal/BookingModal";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const ServiceDetails = () => {
  const [user] = useAuthState(auth);
  const { slug } = useParams();
  const { services, setServices } = useContext(Context);
  const service = services?.find((s) => s?.title == slug);
  const navigate = useNavigate();
  const relatedCategory = services?.filter(
    (r) => r?.category == service?.category && r?.title != service?.title
  );
  const dialogRef = useRef(null);
  const handleOpen = () => {
    dialogRef.current.showModal();
  };
  const handleClose = () => {
    dialogRef.current.close();
  };

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
            <button
              onClick={() =>
                navigate("/booknow", {
                  state: {service:{
                    id:service.id,
                    title:service.title,
                    price:service.price,
                    duration:service.duration
                  }},
                })
              }
              className="book-btn"
            >
              BOOK NOW
            </button>
            <BookingModal
              handleClose={handleClose}
              dialogRef={dialogRef}
              serviceId={service?._id}
            ></BookingModal>
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
                  <p style={{ fontSize: "14px" }}>{related?.title}</p>
                  <div style={{ color: "#e32085", fontWeight: "bold" }}>
                    BDT {related?.price}
                  </div>
                  <button
                    onClick={() => navigate(`/service/${related?.title}`)}
                    className="viewBtn"
                  >
                    VIEW
                  </button>
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
