import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`footer ${location.pathname=='/login'? "d-none":""}`}>
      <div className="footer-background">
      <footer>
        <div className="footer-container">
          <div className="link-container">
            <span className="link-title">GET TO KNOW US</span>
            <Link>Terms of Service</Link>
            <Link>Privacy Policy</Link>
            <Link>Refund policy</Link>
            <Link className=" mt-8">Shipping Policy</Link>
            <Link>About Us</Link>
          </div>
          <div className="link-container">
            <span className="link-title">CATEGORIES</span>
            <Link>Make up</Link>
            <Link>Facial</Link>
            <Link>Hair treatment</Link>
            <Link>Body massage</Link>
            <Link>Waxing</Link>
            <Link>Baby care</Link>
          </div>
          <div className="link-container">
            <span className="link-title">PACKAGES</span>
            <Link>Pre Bridal Care</Link>
            <Link>Bridal Complete Makeover</Link>
            <Link>Luxe Beauty Complete Kit</Link>
            <Link>Enchanted Canvas Makeup Set</Link>
            <Link>Glamour Glow Essentials</Link>
          </div>
          <div className="link-container">
            <span className="link-title">ABOUT US</span>
            <Link>Our Story</Link>
            <Link>Meet the Team</Link>
            <Link>Mission and Vision</Link>
            <Link>Awards and Recognition</Link>
          </div>
          <div className="link-container">
            <span className="link-title">CONTACT</span>
            <Link>
              Contact No. : 01319717565
            </Link>
            <Link className=" ">
              Email - pamperme@gmail.com
            </Link>
            <Link style={{marginTop:"20px"}}>
              Show some love on Social Media
            </Link>
          </div>
        </div>
      </footer>
      <div className="footer-end">
        <p>Copyright © 2023 - All right reserved by pamper me services Ltd</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
