import React, { useEffect, useState, useRef } from "react";
import LoadingSpinner from "../../Paths/LoadingSpinner";
import Reviews from "../../Reviews/Reviews";
import BannerShape from "../../HeroSection/images/banner-shape.png";
import { Link } from "react-router-dom";
import SpecialsImg from "./images/specials-img.png";
import SpecialItem from "../../Specials/SpecialItem";
import Oil from "../../Specials/images/oil.png";
import Brake from "../../Specials/images/brake.png";
import Wheel from "../../Specials/images/wheel.png";
import CarePackage from "./images/car-package.png";
import TravelCare from "./images/travel-care.png";
import EngineSpecial from "./images/engine-special.png";
import "./SpecialsPath.css";

const SpecialsPath = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateFloatContainer, setAnimateFloatContainer] = useState(false);
  const [animateOpacity, setAnimateOpacity] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const upperContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (upperContainerRef.current) {
        const rect = upperContainerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleLinkClick = (e) => {
    e.preventDefault();

    window.location.href = e.currentTarget.href;

    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-lg-12 vehicles-container">
              <div className="vehicles-header-container">
                <div className="line left">
                  <div className="square"></div>
                </div>
                <div className="line middle"></div>
                <div className="line right">
                  <div className="square"></div>
                </div>
                <div className="row vehicles-top-container">
                  <div className="col-lg-6">
                    <div
                      className={`vehicles-float-container review-image ${
                        animateFloatContainer ? "float-right" : ""
                      }`}
                    >
                      <div className="banner-text__container">
                        <img src={BannerShape} className="banner-img" />
                        <h3 className="banner-text work-process-number services-path-p services-path-pp">
                          MACHINE SPECIAL OFFERS
                        </h3>
                      </div>
                      <h2 className="specials-path-header">SPECIALS</h2>
                    </div>
                  </div>
                  <div className="col-lg-6 vehicle-brand-container">
                    <div
                      className={`vehicles-header-right-banner ${
                        animateOpacity ? "show" : ""
                      }`}
                    >
                      <img className="vehicle-bg-car" src={SpecialsImg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-lg-6 vehicles-path-header-container ${
                animateOpacity ? "show" : ""
              }`}
            >
              <h3 className="specials-path-header-1">MACHINE</h3>
              <h3 className="specials-path-header-2">SPECIAL OFFERS</h3>
            </div>
            <div
              className={`col-lg-6 specials-path-p-container ${
                animateOpacity ? "show" : ""
              }`}
            >
              <p className="specials-path-p-1">
                Check out our current promotions and specials and schedule your
                appointment today! Be the first to receive new coupons and
                special offers!
              </p>
            </div>
          </div>
          <div className="row special-path-items-container">
            <div className="col-lg-4">
              <Link
                className="link"
                to="/appointment"
                onClick={handleLinkClick}
              >
                <SpecialItem
                  img={Oil}
                  specialName1={"FULL SYNTHETIC"}
                  specialName2={"OIL CHANGE"}
                  price={"54.95"}
                />
              </Link>
            </div>
            <div className="col-lg-4">
              <Link
                className="link"
                to="/appointment"
                onClick={handleLinkClick}
              >
                <SpecialItem
                  img={Wheel}
                  specialName1={"WHEEL"}
                  specialName2={"ALIGNMENT"}
                  price={"34.49"}
                />
              </Link>
            </div>
            <div className="col-lg-4">
              <Link
                className="link"
                to="/appointment"
                onClick={handleLinkClick}
              >
                <SpecialItem
                  img={Brake}
                  specialName1={"BRAKE"}
                  specialName2={"SERVICE"}
                  price={"24.95"}
                />
              </Link>
            </div>
            <div className="col-lg-4 specials-path-second-half">
              <Link
                className="link"
                to="/appointment"
                onClick={handleLinkClick}
              >
                <SpecialItem
                  img={CarePackage}
                  specialName1={"CAR CARE"}
                  specialName2={"PACKAGE"}
                  price={"22.39"}
                />
              </Link>
            </div>
            <div className="col-lg-4 specials-path-second-half">
              <Link
                className="link"
                to="/appointment"
                onClick={handleLinkClick}
              >
                <SpecialItem
                  img={TravelCare}
                  specialName1={"TRAVEL"}
                  specialName2={"SPECIAL"}
                  price={"27.89"}
                />
              </Link>
            </div>
            <div className="col-lg-4 specials-path-second-half">
              <Link
                className="link"
                to="/appointment"
                onClick={handleLinkClick}
              >
                <SpecialItem
                  img={EngineSpecial}
                  specialName1={"ENGINE"}
                  specialName2={"SPECIAL"}
                  price={"44.99"}
                />
              </Link>
            </div>
          </div>
          <div className="services-path-reviews-container service-type-review">
            <Reviews />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialsPath;
