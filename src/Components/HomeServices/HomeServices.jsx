import { useEffect, useState } from "react";
import "./HomeServices.css";
import HomeService from "../HomeService/HomeService";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`service.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services">
        <h2 style={{
          textAlign:"center",
          fontSize:"40px"
        }}>Popular Services</h2>
      <div className="home-services-container">
        {services.slice(0,3).map((service) => 
          <HomeService key={service?.name} service={service}> </HomeService>
        )}
      </div>
      <Link>View All Services</Link>
    </div>
  );
};

export default HomeServices;
