import "./Footer.css";
import BannerImg from "../HeroSection/images/banner-shape.png";
import Maps from "./Maps/Maps";
import Instagram from "./images/instagram.png";
import Company from "./images/companylogo.png";
import X from "./images/twitter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faCar, faUsers } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <Maps />
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer-first-container">
              <div className="banner-text__container">
                <img src={BannerImg} className="banner-img" />
                <h3 className="banner-text">CUSTOMER REVIEWS</h3>
              </div>
              <h3 className="footer-header">CALL US NOW</h3>
              <h3 className="footer-number">06-1234-5678</h3>
            </div>
            <div className="col-md-6 footer-fifth-container">
              <h2 className="opening-times-header">OPEN TIMES</h2>
              <h4 className="closing-time-weekdays">
                MON - FRI: 8:30 AM - 6:00 PM
              </h4>
              <h4 className="closing-time-sunday">SAT: 8:30 AM - 2:00 PM</h4>
            </div>
            <div className="col-md-6 footer-third-container">
              <h2 className="address-header">ADDRESS</h2>
              <h4 className="footer-address">
                <a href="https://goo.gl/maps/kMXq34H13BQ6E5hW7">
                  30-32/A, 00176 Roma RM, Italy
                </a>
              </h4>
            </div>
            <div className="col-md-6 footer-fouth-container">
              <div className="footer-fouth-inner-container">
                <h2 className="socials-header">SOCIALS</h2>
                <div className="footer-fouth-icons-container">
                  <img src={Instagram} className="instagram-logo" />
                  <img src={Company} className="company-logo" />
                  <img src={X} className="x-logo" />
                </div>
              </div>
            </div>

            <div className="col-md-6 footer-sixth-container">
              <div>
                <h2 className="links-header">LINKS</h2>
              </div>
              <div className="footer-links-container">
                <h3 className="footer-faq">FAQ</h3>
                <h3 className="footer-reviews">REVIEWS</h3>
                <h3 className="footer-contact">CONTACT</h3>
              </div>
            </div>
            <div className="col-md-6 footer-seventh-container">
              <h2 className="copyright-header">COPYRIGHT</h2>
              <h3 className="footer-copyright">© BUILT BY ILYASCAN OLGUN</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
