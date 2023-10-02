import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useUpdateProfile, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


import { Swiper, SwiperSlide } from "swiper/react";
import loginBanner1 from "../../assets/Images/LoginBanner/loginBanner2-01.png";
import banner2 from "../../assets/Images/LoginBanner/login-banner-1.jpg";
import banner3 from "../../assets/Images/LoginBanner/loginBanner3-01.jpg";
import googleIcon from "../../assets/Images/icons/icons8-google-48.png";
import faceLogo from "../../assets/Images/Logo/FaceLogo-01.png"


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import Swal from "sweetalert2";


const Login = () => {
  const [login, setLogin] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ] = useSendPasswordResetEmail(auth);

  
  const navigate = useNavigate();

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const actionCodeSettings = {
    url: 'https://www.example.com/login',
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (!login) {
      const phoneNumber ="+"+ e.target.number.value;
      await createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName})
    }
    else{
      signInWithEmailAndPassword(email, password)
    }


  };

  useEffect(() => {
    if (user)
      navigate("/");
  }, [user])


  return (
    <div className="authentication-page">
      <svg onClick={() => navigate("/")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#e32085" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>

      <div className="authentication-container">
        {/**  TEXT LOGO  */}
        <div className="form-wrapper">
          <Link to="/" className="logo-link">
            <img src={faceLogo} alt="" />
          </Link>
          <div className="form-container">
            {
              login ?
                <div>
                  <h2>WELCOME <span>BACK!</span></h2>
                  <p>Login to get full access of our website</p>
                </div>
                :
                <div>
                  <h2>GET STARTED <span>NOW!</span></h2>
                  <p>Enter your credentials to access your account.</p>
                </div>
            }

            <button onClick={() => signInWithGoogle()}>
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

              {
                login ||
                <div className="floating-label">
                  <input type="text" id="name" name="name" required placeholder="" />
                  <label htmlFor="name">Name</label>
                </div>

              }
              {
                login ||
                <div className="floating-label">
                  <input type="number" id="phone" name="number" required placeholder="" defaultValue="880"/>
                  <label htmlFor="phone">Phone</label>
                </div>

              }
              <div className="floating-label">
                <input type="email" id="email" name="email" required placeholder="" />
                <label htmlFor="email">Email</label>
              </div>

              <div className="floating-label">
                <input type="password" id="pass" name="password" required placeholder="" />
                <label htmlFor="pass">Password</label>
              </div>

              {login &&
                <div className="remember-me-section">
                  <div>
                    <input type="checkbox" name="" id="remember" />
                    <label htmlFor="remember" className="remember-me-label">
                      Remember Me
                    </label>

                  </div>
                  <p className="forgot-pass" onClick={async ()=>{
                    const { value: email } = await Swal.fire({
                      title: 'Reset Password',
                      input: 'email',
                      inputLabel: 'Your email address',
                      inputPlaceholder: 'Enter your email address',
                      confirmButtonText: "SEND",
                      confirmButtonColor: '#e32085'
                    })
                    
                    if (email) {
                      console.log(email);
                      const success = await sendPasswordResetEmail(
                        email,
                        actionCodeSettings
                      );
                      if(success){
                        Swal.fire(`Password reset email sent to ${email}`)
                      }
                      else{
                        Swal.fire(`400 Error`)
                      }
                    }
                  }}>Forgot Password?</p>
                </div>
              }
              <button type="submit">{login ? "Login" : "Sign Up"}</button>
            </form>
          </div>
        </div>
        {
          login ?
            <p>Don't have an account? <span onClick={() => setLogin(false)}>Sign Up!</span></p>
            :
            <p>Already have an account? <span onClick={() => setLogin(true)}>Log In!</span></p>
        }
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
