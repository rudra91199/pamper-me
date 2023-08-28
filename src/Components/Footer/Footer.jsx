import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
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
            <Link>Perfume</Link>
            <Link>Deodorants</Link>
            <Link>Mist</Link>
          </div>
          <div className="link-container">
            <span className="link-title">BRANDS</span>
            <Link>ARMAF</Link>
            <Link>ARMAF ENCHANTED</Link>
            <Link>BIOLUXE</Link>
            <Link>HAVEX</Link>
            <Link>PARIS</Link>
          </div>
          <div className="link-container">
            <span className="link-title">BROCHURE</span>
            <Link>Armaf</Link>
            <Link>Armaf Enchanted</Link>
            <Link>Flavia</Link>
            <Link>Estiara</Link>
          </div>
          <div className="link-container">
            <span className="link-title">STORE LOCATION</span>
            <Link>
              Multi Import <br />
              3rd Floor, 316, Moriswala Building, <br />
              Saboo Siddik Road, Musafir Khana, Mumbai. Maharashtra 400 001.
            </Link>
            <Link>
              Contact No. : +91 90764 05205y
            </Link>
            <Link className=" ">
              Email - contact@armafperfume.com
            </Link>
            <Link>
              Show some love on Social Media
            </Link>
          </div>
        </div>
      </footer>
      <div className="footer-end">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
