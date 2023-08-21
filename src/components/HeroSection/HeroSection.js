import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import BannerImg from "./images/banner-shape.png";
import CarEngine from "./images/car-engine.png";
import CarBrake from "./images/car-brake.png";
import CarSuspension from "./images/car-suspension.png";

const HeroSection = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollAmount(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContainer(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="hero-section__container">
      <div className="line left">
        <div className="square"></div>
      </div>
      <div className="line middle"></div>
      <div className="line right">
        <div className="square"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 hero-left">
            <div className="banner-text__container">
              <img src={BannerImg} className="banner-img" />
              <h3 className="banner-text">THE TRUSTED NAME IN AUTO REPAIR</h3>
            </div>
            <h1 className="hero-header__1">
              the <span>ultimate</span>
            </h1>
            <h2 className="hero-header__2">auto repair</h2>
            <div className="services-btn__container">
              <Link to="/services">
                <button className="services-btn">explore our services</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 hero-right">
            <div className="hero-right__bg"></div>
            <div className="hero-right__bg-2"></div>
            <div className="hero-right-images__container">
              <img
                src={CarEngine}
                className="car-engine-img scroll-left-img"
                style={{ transform: `translateX(-${scrollAmount * 0.5}px)` }}
              />
              <img
                src={CarBrake}
                className="car-brake-img scroll-left-img"
                style={{ transform: `translateX(-${scrollAmount * 0.2}px)` }}
              />
              <img
                src={CarSuspension}
                className="car-suspension-img scroll-left-img"
                style={{ transform: `translateX(-${scrollAmount * 0.3}px)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
