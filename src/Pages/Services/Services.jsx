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
      <img className="serviceBanner" src={serviceBanner} alt="" />
      <ServicesTab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></ServicesTab>
      <div style={{ display: "flex" }}>
        <div className="filter-container">
          <div className="filterCategory">
            <p>Filter by category</p>
            <button>category1</button>
            <button>category2</button>
            <button>category3</button>
            <button>category4</button>
            <button>category5</button>
            <button>category6</button>
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
            <Service service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
