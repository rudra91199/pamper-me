import { useContext } from "react";
import "./RelatedProducts.css";
import { Context } from "../../Providers/PamperContext";
import { Autoplay, Pagination } from "swiper/modules";
import {Swiper, SwiperSlide } from "swiper/react";
import Product from "../Product/Product";

import "swiper/css";
import "swiper/css/pagination";

const RelatedProducts = ({product}) => {
  const { products } = useContext(Context);
  const relatedProducts = products?.products?.filter(item => item.category === product.category)
  return <div className="related-products">
    <h3>Related Products</h3>
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
          {relatedProducts?.map((product) => (
            <SwiperSlide>
              <Product key={product?.name} product={product}></Product>
            </SwiperSlide>
          ))}
        </Swiper>
  </div>;
};

export default RelatedProducts;
