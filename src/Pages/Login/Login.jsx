import "./Login.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import loginBanner1 from "../../assets/Images/LoginBanner/loginBanner2-01.png";
import banner2 from "../../assets/Images/LoginBanner/login-banner-1.jpg";
import banner3 from "../../assets/Images/LoginBanner/loginBanner3-01.jpg";
import textLogo from "../../assets/Images/Logo/textLogo.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Pagination, Autoplay } from "swiper/modules";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  };

  return (
    <div className="authentication-page">
      <div className="authentication-container">
        {/**  TEXT LOGO  */}
        <Link to="/" className="logo-link">
          <img src={textLogo} alt="" />
        </Link>
        <div className="form-wrapper">

          <div className="form-container">
            <h2>WELCOME BACK!</h2>
            <p>Login to get full access of our website</p>
            <button>Sign in with Google</button>
            <form onSubmit={handleSubmit} className="form">
              <input type="email" name="email" placeholder="email" />
              <input type="password" name="password" placeholder="password" />
              <button type="submit">Login</button>
            </form>
            <p className="forgot-pass">Forgot Password?</p>
            <span>or</span> <br />

          </div>
        </div>
      </div>

      <div className="authentication-slider">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="swiper"
        >
          <SwiperSlide>
            <img src={loginBanner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Login;
