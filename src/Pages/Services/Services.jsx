import { useContext, useState } from "react";
import "./Services.css";
import { useEffect } from "react";
import ServicesTab from "../../Components/ServicesTab/ServicesTab";
import serviceBanner from "../../assets/Images/Banner/service-pamper-me-banner.jpg";
import Service from "../../Components/Service/Service";
import { Context } from "../../Providers/PamperContext";
const Services = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [loading, setLoading] = useState(false);
  const { services, setServices } = useContext(Context);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(images[0]?.src);
  const filteredServices = services?.filter(service => service?.category == selectedTab)



  return (
    <div className="services">
      <p className="servicesBanner"></p>
      <ServicesTab
        services={services}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        name="services"
      ></ServicesTab>
      <div className="service-container">
        {(filteredServices.length > 0 ? filteredServices : services)?.map((service) => (
          <Service key={service.name} service={service} setImages={setImages}></Service>
        ))}
      </div>
      {images.length > 0 && <div className="service-images">
        <div>
          <img src={images[0]?.src} alt="" />
        </div>
      </div>}
    </div>
  );
};

export default Services;
