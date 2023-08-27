import "./Logo.css";
import logo from "../../assets/Images/logo.jpg";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="" />
    </div>
  );
};

export default Logo;