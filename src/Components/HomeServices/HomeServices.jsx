import { useContext, useEffect, useState } from "react";
import "./HomeServices.css";
import HomeService from "../HomeService/HomeService";
import { Link } from "react-router-dom";
import { Context } from "../../Providers/PamperContext";

const HomeServices = () => {
  const {services, setServices} = useContext(Context);

  return (
    <div className="services">
        <h2>Popular Services</h2>
      <div className="home-services-container">
        {services?.slice(0,3).map((service) => 
          <HomeService key={service?.title} service={service}> </HomeService>
        )}
      </div>
      <Link>View All Services</Link>
    </div>
  );
};

export default HomeServices;
