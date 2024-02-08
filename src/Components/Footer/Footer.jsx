import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/FaceLogo-01.png";
import serviceIcon from "../../assets/Images/FooterIcons/cosmetics.png";
import contactIcon from "../../assets/Images/FooterIcons/contact.png";
import { useContext } from "react";
import { Context } from "../../Providers/PamperContext";

const Footer = () => {
  const { services } = useContext(Context)
  const year = new Date().getFullYear();

  let categoryArray = [...new Set(services.map((service) => service.category))];

  return (
    <div className={`footer ${location.pathname == "/login" ? "d-none" : ""}`}>

      <footer className="footer-container">

        <div className="footer-section1">
          <div>
            <img src={logo} alt="" />
            <h3>One stop beauty solution</h3>
          </div>

          <div className="footer-logo-content">
            <p>
              Welcome to Pamper Me, your One Stop Beauty Solution, where luxury meets convenience. Our commitment to using premium products ensures a flawless finish, while stringent hygiene practices prioritize your safety.
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
            <h3 >Our Services</h3>
          </div>

          <div style={{ display: "flex", gap: "50px", marginTop: "40px" }}>
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


        <div className="footer-section3">
          <div>
            <img src={contactIcon} alt="" />
            <h3>Contact Us</h3>
          </div>
          <form>
            <div className="input-container">
              <input type="text" placeholder=" Name" />
              <select name="interests" >
                <option disabled value="">Services</option>
                <hr />
                {
                  categoryArray.map((service) => (

                    <option key={service} value="">{service}</option>
                  ))
                }
              </select>
              <input type="email" placeholder=" Email" />
              <input type="number" placeholder=" Number" />
            </div>
            <textarea type="text" rows={5} placeholder=" Your Message" />
            <input className="submitBtn" type="submit" value="Submit" />
          </form>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
