import React, { useEffect, useState } from "react";
import "./VehiclesPath.css";
import { Link } from "react-router-dom";
import BannerImg from "../../HeroSection/images/banner-shape.png";
import LoadingSpinner from "../../Paths/LoadingSpinner";
import Reviews from "../../Reviews/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faCar, faUsers } from "@fortawesome/free-solid-svg-icons";
import FreeAppointment from "../../FreeAppointment/FreeAppointment";
import BannerCars from "./images/banner-cars.png";
import VehicleTypes from "./VehicleTypes/VehicleTypes";
import Specials from "../../Specials/Specials";
//Vehicle Brands
import Audi from "./images/audi-car.png";
import BMW from "./images/bmw-car.png";
import Cadillac from "./images/cadillac-car.png";
import Chrystler from "./images/chyrstler-car.png";
import Chevrolet from "./images/chevrolet-car.png";
import Dodge from "./images/dodge-car.png";
import Ford from "./images/ford-car.png";
import Fiat from "./images/fiat-car.png";
import Honda from "./images/honda-car.png";
import Hyundai from "./images/hyundai-car.png";
//Vehicle Brands

const VehiclesPath = () => {
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
                    className={`vehicle-path-header-left-banner ${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <img
                      src={BannerCars}
                      className="service-type-banner-bg vehicles-type-banner-bg"
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
                        VEHICLES WE SERVICE
                      </h3>
                    </div>
                    <h2 className="vehicles-path-header">VEHICLES</h2>
                  </div>
                </div>
              </div>
              <div
                className={`col-lg-6 vehicles-path-header-container ${
                  animateOpacity ? "show" : ""
                }`}
              >
                <h3 className="vehicle-path-header-1">WE PROVIDE ELITE</h3>
                <h3 className="vehicle-path-header-2">SERVICES FOR 10+</h3>
                <h3 className="vehicle-path-header-3">VEHICLE BRANDS</h3>
              </div>
              <div
                className={`col-lg-6 vehicles-path-p-container ${
                  animateOpacity ? "show" : ""
                }`}
              >
                <p className="vehicles-path-p">
                  We're often asked why we don't service all vehicle brands, as
                  most independents automotive shops do. The answer: We service
                  vehicles at a much higher level than most shops, but this
                  requires huge investments in equipment and training - and it
                  wouldn't be possible if we serviced every vehicle on the road.
                </p>
              </div>
              <div className="col-lg-6">
                <Link className="link" to="/audi" onClick={handleLinkClick}>
                  <VehicleTypes
                    carBrand={"AUDI"}
                    carBrandP={"Audi"}
                    carBrandImg={Audi}
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="link" to="/bmw" onClick={handleLinkClick}>
                  <VehicleTypes
                    carBrand={"BMW"}
                    carBrandP={"BMW"}
                    carBrandImg={BMW}
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="link" to="/cadillac" onClick={handleLinkClick}>
                  <VehicleTypes
                    carBrand={"CADILLAC"}
                    carBrandP={"Cadillac"}
                    carBrandImg={Cadillac}
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link
                  className="link"
                  to="/chrystler"
                  onClick={handleLinkClick}
                >
                  <VehicleTypes
                    carBrand={"CHRYSTLER"}
                    carBrandP={"Chrystler"}
                    carBrandImg={Chrystler}
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link
                  className="link"
                  to="/chevrolet"
                  onClick={handleLinkClick}
                >
                  <VehicleTypes
                    carBrand={"CHEVROLET"}
                    carBrandP={"Chevrolet"}
                    carBrandImg={Chevrolet}
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="link" to="/dodge" onClick={handleLinkClick}>
                  <VehicleTypes
                    carBrand={"DODGE"}
                    carBrandP={"Dodge"}
                    carBrandImg={Dodge}
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="link" to="/ford" onClick={handleLinkClick}>
                  <VehicleTypes
                    carBrand={"FORD"}
                    carBrandP={"Ford"}
                    carBrandImg={Ford}
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="link" to="/fiat" onClick={handleLinkClick}>
                  <VehicleTypes
                    carBrand={"FIAT"}
                    carBrandP={"Fiat"}
                    carBrandImg={Fiat}
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="link" to="/honda" onClick={handleLinkClick}>
                  <VehicleTypes
                    carBrand={"HONDA"}
                    carBrandP={"Honda"}
                    carBrandImg={Honda}
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="link" to="/hyundai" onClick={handleLinkClick}>
                  <VehicleTypes
                    carBrand={"HYUNDAI"}
                    carBrandP={"Hyundai"}
                    carBrandImg={Hyundai}
                  />
                </Link>
              </div>
            </div>
            <div className="vehicles-path-specials-container">
              <Specials />
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

export default VehiclesPath;
