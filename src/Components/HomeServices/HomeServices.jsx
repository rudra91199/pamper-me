import { useContext, useEffect, useState } from "react";
import "./HomeServices.css";
import HomeService from "../HomeService/HomeService";
import { Link } from "react-router-dom";
import { Context } from "../../Providers/PamperContext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const HomeServices = () => {
  const { services, setServices } = useContext(Context);
  return (
    <div className="services">
      <p>WHO WE OFFER</p>
      <h2>What We Provide To Our Customers</h2>
      <div className="home-services-container">
        <Swiper
          spaceBetween={30}
          // autoplay={{
          //   delay: 3000,
          //   pauseOnMouseEnter: true,
          // }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1500: {
              slidesPerView: 6,
            },
          }}
          // loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {services?.slice(0, 10).map((service) => (
            <SwiperSlide>
              <HomeService key={service?.title} service={service}>
                {" "}
              </HomeService>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link to={"/services"}>View All Services</Link>
    </div>
  );
};

export default HomeServices;
