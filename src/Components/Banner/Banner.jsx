// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner2 from '../../assets/Images/Banner/banner2.jpg'
import banner3 from '../../assets/Images/Banner/banner-3.jpg'
import banner1 from '../../assets/Images/Banner/pamper-me.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Banner.css'
// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="swiper"
      >
        <SwiperSlide>
          <img src={banner2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
