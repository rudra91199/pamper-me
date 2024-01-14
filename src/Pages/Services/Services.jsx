import { useState } from "react";
import "./Services.css";
import { useEffect } from "react";
import ServicesTab from "../../Components/ServicesTab/ServicesTab";
import serviceBanner from "../../assets/Images/Banner/service-pamper-me-banner.jpg";
import Service from "../../Components/Service/Service";
const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="services">
      <p className="servicesBanner"></p>
      <ServicesTab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></ServicesTab>
      <div className="service-container">
        {services?.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
