import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/FaceLogo-01.png";
import serviceIcon from "../../assets/Images/FooterIcons/cosmetics.png";
import contactIcon from "../../assets/Images/FooterIcons/contact.png";
import { useContext } from "react";
import { Context } from "../../Providers/PamperContext";

const Footer = () => {
  const {services}= useContext(Context)
  const year = new Date().getFullYear();

  const filteredCategory = services.filter((service))
  return (
    <div className={`footer ${location.pathname == "/login" ? "d-none" : ""}`}>
      <footer className="footer-container">
        <div className="footer-section1">
          <img src={logo} className="footerLogo" alt="" />
          <h3>One stop beauty solution</h3>
          <div className="footer-logo-content">
            <p>
              In vitae nisi aliquam, scelerisque leo a, volu- tpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </p>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-dribbble"></i>
            <i className="fa-brands fa-behance"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>

        <div className="footer-section2">
          <div>
            <img src={serviceIcon} alt="" />
            <p className="link-title">OUR SERVICES</p>
            <div style={{ display: "flex", gap: "50px", marginTop: "20px" }}>
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
                <Link>Bridal Makeover</Link>
                <Link>Beauty Complete </Link>
                <Link>Canvas Makeup </Link>
                <Link>Glamour Glow</Link>
                <Link>Hair Dressing</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section3">
          <div>
            <img src={contactIcon} className="footerLogo" alt="" />
            <p className="link-title">CONTACT US</p>
            <form>
              <div>
                <input type="text" />
                <select name="interests" id="">
                  {
                    services.map((service)=> (
                      
                      <option key={service._id} value="">{service.category}</option>
                    ))
                  }
                </select>
              </div>
              <div>
                <input type="text" />
                <input type="text" />
              </div>
              <input style={{ width: "100%" }} type="text" />
              <input className="submitBtn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
