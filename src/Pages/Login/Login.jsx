import "./Login.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import loginBanner1 from "../../assets/Images/LoginBanner/loginBanner2-01.png";
import banner2 from "../../assets/Images/LoginBanner/login-banner-1.jpg";
import banner3 from "../../assets/Images/LoginBanner/loginBanner3-01.jpg";
import googleIcon from "../../assets/Images/icons/icons8-google-48.png";
import textLogo from "../../assets/Images/Logo/textLogo.jpg";
import logo from "../../assets/Images/Logo/logo.jpg";
import faceLogo from "../../assets/Images/Logo/FaceLogo-01.png"


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
        <div className="form-wrapper">
        <Link to="/" className="logo-link">
          <img src={faceLogo} alt="" />
        </Link>
          <div className="form-container">
            <h2>WELCOME <span>BACK!</span></h2>
            <p>Login to get full access of our website</p>

            <button>
              <i className="fa-brands fa-google"></i>
              <img src={googleIcon} alt="" />
              <span>Sign in with Google</span>
            </button>

            <div className="or-container">
              <span className="straight-line"></span>
              <span>or</span>
              <span className="straight-line"></span>
            </div>

            <form onSubmit={handleSubmit} className="form">

              <div className="floating-label">
                <input type="email" id="email" required placeholder=""/>
                <label htmlFor="email">Email</label>
              </div>

              <div className="floating-label">
                <input type="password" id="pass" required placeholder=""/>
                <label htmlFor="pass">Password</label>
              </div>

              <button type="submit">Login</button>
            </form>
            <p className="forgot-pass">Forgot Password?</p>
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
