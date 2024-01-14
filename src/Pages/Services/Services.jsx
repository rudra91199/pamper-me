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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", width:"100%" }}>
        <div className="filter-container">
          <div className="filterCategory">
            <p>Filter by category</p>
            <div className="hr"></div>
            <button>Skin care</button>
            <div className="hr"></div>
            <button>Hair care</button>
            <div className="hr"></div>
            <button>Makeover</button>
            <div className="hr"></div>
            <button>Body polish</button>
            <div className="hr"></div>
            <button>Massage</button>
          </div>
          <div className="filterPrice">
            <p>Filter by price</p>
            <input type="number" placeholder="From"/>
            <input type="number" placeholder="To"/>
          </div>
          <button className="filterBtn">
            Filter
          </button>
        </div>
        <div className="service-container">
          {services?.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
