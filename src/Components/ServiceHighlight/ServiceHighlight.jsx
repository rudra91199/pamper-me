import "./ServiceHighlight.css";
import service1 from "../../assets/Images/Services/service1.jpg";
import service2 from "../../assets/Images/Services/service2.jpg";

const ServiceHighlight = () => {
  return (
    <div className="serviceHighlights">
      <div className="highlight-details">
        <h1>Rediscover Beauty and Relaxation with <span>Pamper Me</span></h1>
        <p>
          Discover serenity and beauty with Pamper Me's comprehensive range of
          at-home services. From luxurious makeup applications to indulgent
          massages, we're here to cater to all your beauty needs. Our skilled
          professionals are dedicated to providing you with a relaxing and
          rejuvenating experience that leaves you feeling pampered from head to
          toe. Experience the ultimate in luxury with Pamper Me.
        </p>
        <button>Browse Our All Services</button>
      </div>
      <div>
        <img src={service1} alt="" />
      </div>
      <div>
        <img src={service2} alt="" />
      </div>
    </div>
  );
};

export default ServiceHighlight;
