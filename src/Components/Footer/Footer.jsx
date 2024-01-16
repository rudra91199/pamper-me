import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={`footer ${location.pathname == "/login" ? "d-none" : ""}`}>
      <footer className="footer-container">
        <div className="footer-section1">
          <div>
            <img src={logo} className="footerLogo" alt="" />
            <p style={{ fontWeight: "bold" }}>One stop beauty service</p>
            <p style={{ marginTop: "40px" }}>
              In vitae nisi aliquam, scelerisque leo a, volu- tpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </p>
          </div>
        </div>
        <div className="footer-section2">
          <div>
            <span className="link-title">OUR SERVICES</span>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link>Make up</Link>
                <Link>Facial</Link>
                <Link>Hair treatment</Link>
                <Link>Body massage</Link>
                <Link>Waxing</Link>
                <Link>Baby care</Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link>Pre Bridal Care</Link>
                <Link>Bridal Complete Makeover</Link>
                <Link>Luxe Beauty Complete Kit</Link>
                <Link>Enchanted Canvas Makeup Set</Link>
                <Link>Glamour Glow Essentials</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section3">
          <div>
            <span className="link-title">CONTACT US</span>
            <form>
              <div>
              <input type="text"/>
              <input type="text"/>
              </div>
              <div>
              <input type="text"/>
              <input type="text"/>
              </div>
              <input style={{width:"55%"}} type="text"/>
              <input className="submitBtn" type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
