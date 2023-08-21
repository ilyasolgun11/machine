import React, { useEffect, useRef, useState } from "react";
import "./Specials.css";
import BannerImg from "../HeroSection/images/banner-shape.png";
import { Link } from "react-router-dom";
import SpecialItem from "./SpecialItem";
import Oil from "./images/oil.png";
import Wheel from "./images/wheel.png";
import Brake from "./images/brake.png";

const Specials = () => {
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
    <div className="specials-container">
      <div className="container">
        <div
          ref={upperContainerRef}
          className={`specials-upper-container ${isVisible ? "float-up" : ""}`}
        >
          <div className="banner-text__container">
            <img src={BannerImg} className="banner-img" />
            <h3 className="banner-text">TEMPORARY SPECIAL OFFERS</h3>
          </div>
          <h2 className="specials-header">SPECIALS</h2>
          <Link className="link" to="/specials" onClick={handleLinkClick}>
            <button className="hero-about-btn">
              SEE ALL SPECIALS
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
        <div className="row">
          <div className="col-lg-4">
            <Link className="link" to="/appointment" onClick={handleLinkClick}>
              <SpecialItem
                img={Oil}
                specialName1={"FULL SYNTHETIC"}
                specialName2={"OIL CHANGE"}
                price={"54.95"}
              />
            </Link>
          </div>
          <div className="col-lg-4">
            <Link className="link" to="/appointment" onClick={handleLinkClick}>
              <SpecialItem
                img={Wheel}
                specialName1={"WHEEL"}
                specialName2={"ALIGNMENT"}
                price={"34.49"}
              />
            </Link>
          </div>
          <div className="col-lg-4">
            <Link className="link" to="/appointment" onClick={handleLinkClick}>
              <SpecialItem
                img={Brake}
                specialName1={"BRAKE"}
                specialName2={"SERVICE"}
                price={"24.95"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
