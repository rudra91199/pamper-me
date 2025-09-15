import "./relatedServices.css";
import { Autoplay, Pagination } from "swiper/modules";
import Product from "../Product/Product";
import { SwiperSlide, Swiper } from "swiper/react";
import { useContext } from "react";
import { Context } from "../../Providers/PamperContext";
import Service from "../Service/Service";

const RelatedServices = ({ service: selectedService }) => {
  const { services } = useContext(Context);

  const relatedServices = services.filter(
    (service) => service.category === selectedService.category
  );

  return (
    <div className="relatedServices">
      <h3>Related Services</h3>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1500: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {relatedServices?.slice(0,8)?.map((service, i) => (
          <SwiperSlide>
            <Service key={i} service={service}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedServices;
