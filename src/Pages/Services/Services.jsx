import { useContext, useState } from "react";
import "./Services.css";
import { useEffect } from "react";
import ServicesTab from "../../Components/ServicesTab/ServicesTab";
import serviceBanner from "../../assets/Images/Banner/service-pamper-me-banner.jpg";
import Service from "../../Components/Service/Service";
import { Context } from "../../Providers/PamperContext";
const Services = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const {services, setServices} = useContext(Context);


  return (
    <div className="services">
      <p className="servicesBanner"></p>
      <ServicesTab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></ServicesTab>
      <div className="service-grid">
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
