import { useContext, useState } from "react";
import "./Services.css";
import { useEffect } from "react";
import ServicesTab from "../../Components/ServicesTab/ServicesTab";
import serviceBanner from "../../assets/Images/Banner/service-pamper-me-banner.jpg";
import Service from "../../Components/Service/Service";
import { Context } from "../../Providers/PamperContext";
import { IoMdClose } from "react-icons/io";
const Services = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [loading, setLoading] = useState(false);
  const { services, setServices } = useContext(Context);
  const [images, setImages] = useState({
    images: [],
    selectedImage: "",
  });
  const filteredServices = services?.filter(
    (service) => service?.category == selectedTab
  );


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
        {(filteredServices.length > 0 ? filteredServices : services)?.map(
          (service) => (
            <Service
              key={service.name}
              service={service}
              setImages={setImages}
            ></Service>
          )
        )}
      </div>
      {images.images?.length > 0 && (
        <div className="service-images" onClick={() => setImages({...images, images:[]})}>
          <button
            onClick={() => setImages({ ...images, images: [] })}
            className="close-button"
          >
            <IoMdClose />
          </button>
          <div className="service-images-container" onClick={(e) => e.stopPropagation() }>
            <div className="image-fullSize">
              <img src={images?.selectedImage} alt="" />
            </div>
            <div className="images">
              {images?.images?.slice(1, 5)?.map((image) => (
                <img
                  src={image.src}
                  alt=""
                  onClick={() =>
                    setImages({ ...images, selectedImage: image.src })
                  }
                  className={
                    image.src === images.selectedImage && "selected-image"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
