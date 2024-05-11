import { useContext, useEffect, useState } from "react";
import "./PopularProducts.css";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import { Context } from "../../Providers/PamperContext";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const PopularProducts = () => {
  const { products } = useContext(Context);

  return (
    <div className="products">
      <h2>Popular Products</h2>
      <div className="home-products-container">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
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
          {products?.products?.slice(0, 8).map((product) => (
            <SwiperSlide>
              <Product key={product?.name} product={product}></Product>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="all-product-btn">
        <Link>View All Products</Link>
      </button>
    </div>
  );
};

export default PopularProducts;
