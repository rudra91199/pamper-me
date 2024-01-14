import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={`footer ${location.pathname == "/login" ? "d-none" : ""}`}>
      <div className="footer-background">
        <footer>
          <div className="footer-container">
            <div className="footer-section1">
            <img src={logo} className="footerLogo" alt=""/>
              <p style={{fontWeight:"bold" }}>One stop beauty service</p>
              <p style={{ marginTop: "40px" }}>
                In vitae nisi aliquam, scelerisque leo a, volu- tpat sem.
                Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                volutpat.
              </p>
            </div>
            <div className="footer-section2">
              <span className="link-title">OUR SERVICES</span>
              <div style={{display:"flex",gap:"20px", marginTop:"20px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                  <Link>Make up</Link>
                  <Link>Facial</Link>
                  <Link>Hair treatment</Link>
                  <Link>Body massage</Link>
                  <Link>Waxing</Link>
                  <Link>Baby care</Link>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                  <Link>Pre Bridal Care</Link>
                  <Link>Bridal Complete Makeover</Link>
                  <Link>Luxe Beauty Complete Kit</Link>
                  <Link>Enchanted Canvas Makeup Set</Link>
                  <Link>Glamour Glow Essentials</Link>
                </div>
              </div>
            </div>
            <div className="link-container">
              <span className="link-title">CONTACT US</span>
            </div>
          </div>
        </footer>
        <div className="footer-section2">
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
