import React, { useEffect, useState } from "react";
import "./ServiceType.css";
import BannerImg from "../../../HeroSection/images/banner-shape.png";
import LoadingSpinner from "../../LoadingSpinner";
import Reviews from "../../../Reviews/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faCar, faUsers } from "@fortawesome/free-solid-svg-icons";
import FreeAppointment from "../../../FreeAppointment/FreeAppointment";

const ServiceType = (props) => {
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

    const opacityTimer = setTimeout(() => {
      setAnimateOpacity(true);
    }, 720);

    return () => clearTimeout(opacityTimer);
  }, [animateFloatContainer]);

  return (
    <div>
      <div className="services-path">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="container">
            <div className="row service-type-row">
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
                    className={`services-type-header-left-banner ${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <img
                      src={props.bannerBg}
                      className="service-type-banner-bg"
                      alt="banner-img"
                    />
                  </div>
                  <div
                    className={`services-float-container review-image ${
                      animateFloatContainer ? "float-left" : ""
                    }`}
                  >
                    <div className="banner-text__container">
                      <img src={BannerImg} className="banner-img" />
                      <h3 className="banner-text work-process-number services-path-p services-path-pp">
                        {props.bannerText}
                      </h3>
                    </div>
                    <h2 className="services-path-header service-type-header">
                      {props.header}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 service-type-importance-main-container">
                <div
                  className={`service-type-importance-container ${
                    animateOpacity ? "show" : ""
                  }`}
                >
                  <h3 className="service-type-importance-header-1">
                    {props.importanceHeader1}
                  </h3>
                  <h3 className="service-type-importance-header-2">
                    {props.importanceHeader2}
                  </h3>
                  <p className="service-type-importance-p-1">
                    {props.importanceParagraph1}
                  </p>
                  <p className="service-type-importance-p-2">
                    {props.importanceParagraph2}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 team-result-pricing-main-container">
                <div
                  className={`team-result-pricing-container ${
                    animateOpacity ? "show" : ""
                  }`}
                >
                  <div className="pricing-container">
                    <FontAwesomeIcon
                      className="service-type-euro-symbol"
                      icon={faEuroSign}
                      style={{ color: "#000" }}
                    />
                    <h4 className="pricing-header">COMPETATIVE PRICING</h4>
                    <p className="pricing-p">
                      We won't charge you an arm and a leg to get you back up
                      and running - our rates are very reasonable.{" "}
                    </p>
                  </div>
                  <div className="team-result-container">
                    <div className="result-container">
                      <FontAwesomeIcon
                        className="service-type-car-symbol"
                        icon={faCar}
                        style={{ color: "#000" }}
                      />
                      <h4 className="result-header">AMAZING RESULTS</h4>
                      <p className="result-p">
                        Every time you put your car in our hands you know you'll
                        get nothing short of amazing results back.
                      </p>
                    </div>
                    <div className="great-team-container">
                      <FontAwesomeIcon
                        className="service-type-team-symbol"
                        icon={faUsers}
                        style={{ color: "#000" }}
                      />
                      <h4 className="great-header">GREAT TEAM</h4>
                      <p className="great-p">
                        Our team of great mechanics and tow truck operators have
                        a combined 20+ years of hands on experience.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services-type-free-ap">
                <FreeAppointment />
              </div>
            </div>
            <div className="services-path-reviews-container service-type-review">
              <Reviews />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceType;
