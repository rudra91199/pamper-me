import { useContext, useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import ServicesTab from "../../Components/ServicesTab/ServicesTab";
import serviceBanner from "../../assets/Images/Banner/service-pamper-me-banner.jpg";
import Service from "../../Components/Service/Service";
import { Context } from "../../Providers/PamperContext";
const Shop = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [loading, setLoading] = useState(false);
  const {services, setServices} = useContext(Context);

  const filteredServices = services?.filter(service=>service?.category==selectedTab)

  return (
    <div className="shopProducts">
      <p className="shopProductBanner"></p>
      <ServicesTab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></ServicesTab>
      <div className="shopProduct-grid">
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
        <div className="shopProduct-container">
          {(filteredServices.length>0?filteredServices:services)?.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
