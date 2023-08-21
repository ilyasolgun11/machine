import React, { useEffect, useRef, useState } from "react";
import "./Vehicles.css";
import { Link } from "react-router-dom";
import BannerImg from "../HeroSection/images/banner-shape.png";
import audi from "./images/audi.png";
import chevrolet from "./images/chevrolet.png";
import ford from "./images/ford.png";
import hyundai from "./images/hyundai.png";
import fiat from "./images/fiat.png";
import honda from "./images/honda.png";

const Vehicles = () => {
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

  const handleLinkClick = (e) => {
    e.preventDefault();

    window.location.href = e.currentTarget.href;

    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  return (
    <div className="vehicles-main-container">
      <div className="container">
        <div className="vehicles-red-shape"></div>
        <div
          ref={upperContainerRef}
          className={`vehicles-upper__container ${isVisible ? "float-up" : ""}`}
        >
          <div className="banner-text__container">
            <img src={BannerImg} className="banner-img" alt="Banner" />
            <h3 className="banner-text">VEHICLES</h3>
          </div>
          <h2 className="vehicles-header-1">VEHICLES WE</h2>
          <h2 className="vehicles-header-2">SERVICE</h2>
          <Link className="link" to="/vehicles" onClick={handleLinkClick}>
            <button className="hero-about-btn">
              SEE ALL VEHICLES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="vehicles-container row">
          <div className="col-lg-6 vehicles-container-style">
            <Link
              className="link vehicles-link-container"
              to="/audi"
              onClick={handleLinkClick}
            >
              <img src={audi} className="audi-img" />
            </Link>
            <Link
              className="link vehicles-link-container"
              to="/chevrolet"
              onClick={handleLinkClick}
            >
              <img src={chevrolet} className="chevrolet-img" />
            </Link>
            <Link
              className="link vehicles-link-container"
              to="/ford"
              onClick={handleLinkClick}
            >
              <img src={ford} className="ford-img" />
            </Link>
          </div>
          <div className="col-lg-6 vehicles-container-style">
            <Link
              className="link vehicles-link-container"
              to="/hyundai"
              onClick={handleLinkClick}
            >
              <img src={hyundai} className="hyundai-img" />
            </Link>
            <Link
              className="link vehicles-link-container"
              to="/fiat"
              onClick={handleLinkClick}
            >
              <img src={fiat} className="fiat-img" />
            </Link>
            <Link
              className="link vehicles-link-container"
              to="/honda"
              onClick={handleLinkClick}
            >
              <img src={honda} className="honda-img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
