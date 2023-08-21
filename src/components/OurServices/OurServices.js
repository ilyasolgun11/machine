import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";
import BannerImg from "../HeroSection/images/banner-shape.png";
import Services from "./Services";
import OilChange from "./images/oil-change.png";
import Diagnostic from "./images/diagnostic.png";
import Engine from "./images/engine.png";
import Brakes from "./images/brakes.png";
import Transmission from "./images/transmission.png";
import Wheel from "./images/wheel.png";

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const upperContainerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    observerRef.current = new IntersectionObserver(handleIntersection);
    observerRef.current.observe(upperContainerRef.current);
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();

    window.location.href = e.currentTarget.href;

    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  return (
    <div className="our-services">
      <div className="container">
        <div
          ref={upperContainerRef}
          className={`our-services-upper_container ${
            isVisible ? "float-up" : ""
          }`}
        >
          <div className="banner-text__container">
            <img src={BannerImg} className="banner-img" />
            <h3 className="banner-text">WHAT WE DO</h3>
          </div>
          <h2 className="our-services-header">OUR SERVICES</h2>
          <Link to="/services" className="link" onClick={handleLinkClick}>
            <button className="hero-about-btn">
              VIEW ALL
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="row services-items-container">
          <div className="col-lg-4 services-item-container">
            <Link className="link" to="/oilchange" onClick={handleLinkClick}>
              <Services
                img={OilChange}
                header="OIL CHANGES"
                info="Vehicle maintenance is extremely important and the easiest thing a vehicle owner can do is get the oil changed."
              />
            </Link>
          </div>
          <div className="col-lg-4 services-item-container">
            <Link className="link" to="/diagnostic" onClick={handleLinkClick}>
              <Services
                img={Diagnostic}
                header="DIAGNOSTIC"
                info="Our certified technicians use the latest diagnnostic equipment to service and repair your vehicles."
              />
            </Link>
          </div>
          <div className="col-lg-4 services-item-container">
            <Link className="link" to="/engines" onClick={handleLinkClick}>
              <Services
                img={Engine}
                header="ENGINE"
                info="We use state-of-the-art scan tool equipment to perform engine diagnostics and repair."
              />
            </Link>
          </div>
          <div className="col-lg-4 services-item-container brakes">
            <Link className="link" to="/brakerepair" onClick={handleLinkClick}>
              <Services
                img={Brakes}
                header="BRAKES"
                info="If you have any doubts regarding the current condition of your brakes, it's best to call or pay us a visit."
              />
            </Link>
          </div>
          <div className="col-lg-4 services-item-container transmission">
            <Link className="link" to="/transmission" onClick={handleLinkClick}>
              <Services
                img={Transmission}
                header="TRANSMISSION"
                info="If you want your car to be in its top shape, you can have a transmission check up today."
              />
            </Link>
          </div>
          <div className="col-lg-4 services-item-container wheels">
            <Link
              className="link"
              to="/tiresandwheels"
              onClick={handleLinkClick}
            >
              <Services
                img={Wheel}
                header="TIRES & WHEELS"
                info="We use state-of-the-art scan tool equipment to perform engine diagnostics and repair."
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
