import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServicesPath.css";
import ServiceBg from "./images/service-img.jpg";
import BannerShape from "../../../HeroSection/images/banner-shape.png";
import Diagnostic from "../images/diagnostic.jpg";
import TiresAndWheels from "../images/tires-and-wheels.jpg";
import Engines from "../images/engines.jpg";
import ServicesItems from "./ServicesItems";
import BrakeRepair from "../images/brakes.jpg";
import Transmission from "../images/transmission.jpg";
import OilChange from "../images/oil-change.jpeg";
import LoadingSpinner from "../../LoadingSpinner";
import Reviews from "../../../Reviews/Reviews";

const ServicesPath = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateFloatContainer, setAnimateFloatContainer] = useState(false);
  const [animateOpacity, setAnimateOpacity] = useState(false);

  const triggerAnimation = () => {
    const element = document.querySelector(".services-float-container");
    if (element) {
      element.classList.add("float-left");
    }
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    triggerAnimation();
    const animationTimer = setTimeout(() => {
      setAnimateFloatContainer(true);
    }, 720);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  useEffect(() => {
    if (animateFloatContainer) {
      const images = document.querySelectorAll(".services-path-img");
      images.forEach((img) => {
        img.classList.add("show");
      });
    }
  }, [animateFloatContainer]);

  useEffect(() => {
    if (animateFloatContainer) {
      const images = document.querySelectorAll(".services-path-img");
      images.forEach((img) => {
        img.classList.add("show");
      });
    }

    const opacityTimer = setTimeout(() => {
      setAnimateOpacity(true);
    }, 720);

    return () => clearTimeout(opacityTimer);
  }, [animateFloatContainer]);

  const handleLinkClick = (e) => {
    e.preventDefault();

    window.location.href = e.currentTarget.href;

    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  return (
    <div>
      <div className="services-path">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-lg-12 services-path-container">
                <div className="services-path-header-container">
                  <div className="line left">
                    <div className="square"></div>
                  </div>
                  <div className="line middle"></div>
                  <div className="line right">
                    <div className="square"></div>
                  </div>
                  <div
                    className={`services-path-header-left-banner ${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <img
                      src={ServiceBg}
                      className={`service-path-banner-bg ${
                        animateOpacity ? "show" : ""
                      }`}
                      alt="banner-img"
                    />
                  </div>
                  <div
                    className={`services-float-container review-image ${
                      animateFloatContainer ? "float-left" : ""
                    }`}
                  >
                    <div className="banner-text__container">
                      <img src={BannerShape} className="banner-img" />
                      <h3 className="banner-text work-process-number services-path-p">
                        WE PRIDE OURSELF IN EXCELLENT SERVICE
                      </h3>
                    </div>
                    <h2 className="services-path-header">SERVICES</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 services-path-first-half">
                <Link
                  className="link"
                  to="/diagnostic"
                  onClick={handleLinkClick}
                >
                  <ServicesItems img={Diagnostic} name={"DIAGNOSTIC"} />
                </Link>
              </div>
              <div className="col-lg-4 services-path-first-half">
                <Link
                  className="link"
                  to="/tiresandwheels"
                  onClick={handleLinkClick}
                >
                  <ServicesItems img={TiresAndWheels} name={"TIRES & WHEELS"} />
                </Link>
              </div>
              <div className="col-lg-4 services-path-first-half">
                <Link className="link" to="/engines" onClick={handleLinkClick}>
                  <ServicesItems img={Engines} name={"ENGINES"} />
                </Link>
              </div>

              <div className="col-lg-4 services-path-first-half">
                <Link
                  className="link"
                  to="/brakerepair"
                  onClick={handleLinkClick}
                >
                  <ServicesItems img={BrakeRepair} name={"BRAKE REPAIR"} />
                </Link>
              </div>
              <div className="col-lg-4 services-path-second-half">
                <Link
                  className="link"
                  to="/transmission"
                  onClick={handleLinkClick}
                >
                  <ServicesItems
                    img={Transmission}
                    name={"TRANSMISSION REPAIR"}
                  />
                </Link>
              </div>
              <div className="col-lg-4 services-path-second-half">
                <Link
                  className="link"
                  to="/oilchange"
                  onClick={handleLinkClick}
                >
                  <ServicesItems img={OilChange} name={"OIL CHANGE"} />
                </Link>
              </div>
            </div>
            <div className="services-path-reviews-container">
              <Reviews />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPath;
