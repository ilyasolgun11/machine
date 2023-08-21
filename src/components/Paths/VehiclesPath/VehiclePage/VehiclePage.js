import React, { useEffect, useState, useRef } from "react";
import BannerImg from "../../../HeroSection/images/banner-shape.png";
import LoadingSpinner from "../../../Paths/LoadingSpinner";
import Reviews from "../../../Reviews/Reviews";
import Specials from "../../../Specials/Specials";
import VehicleTypes from "../VehicleTypes/VehicleTypes";
import BannerShape from "../../../HeroSection/images/banner-shape.png";
import { Link } from "react-router-dom";
import "./VehiclePage.css";
import Audi from "../images/audi-car.png";
import BMW from "../images/bmw-car.png";
import Cadillac from "../images/cadillac-car.png";
import Chrystler from "../images/chyrstler-car.png";
import Chevrolet from "../images/chevrolet-car.png";
import Dodge from "../images/dodge-car.png";
import Ford from "../images/ford-car.png";
import Fiat from "../images/fiat-car.png";
import Honda from "../images/honda-car.png";
import Hyundai from "../images/hyundai-car.png";

const VehiclePage = (props) => {
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

  const vehicleBrandStyles = {
    AUDI: {
      background:
        "linear-gradient(to top left, rgb(60, 60, 60) 1%,  transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
    BMW: {
      background:
        "linear-gradient(to top left, rgb(60, 60, 60) 1%,  transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
    CADILLAC: {
      background:
        "linear-gradient(to top left, rgb(60, 60, 60) 1%,  transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
    CHRYSTLER: {
      background:
        "linear-gradient(to top left, rgb(60, 60, 60) 1%, transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
    CHEVROLET: {
      background:
        "linear-gradient(to top left, rgb(60, 60, 60) 1%, transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
    DODGE: {
      background:
        "linear-gradient(to top left, rgb(60, 60, 60) 1%, transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
    FORD: {
      background:
        "linear-gradient(to top left, rgb(60, 60, 60) 1%, transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
    FIAT: {
      background:
        "linear-gradient(to top left, rgb(60, 60, 60) 1%, transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
    HONDA: {
      background:
        "linear-gradient(to top left, rgb(60, 60, 60) 1%, transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
    HYUNDAI: {
      background: "linear-gradient(to top left, rgb(0, 0, 0) 1%, transparent)",
      "@media only screen and (max-width: 490px)": {
        width: "390px",
        margin: "0px auto",
      },
    },
  };

  const defaultBackgroundStyle = {
    background:
      "linear-gradient(to top right, rgb(221, 221, 221), transparent)",
    "@media only screen and (max-width: 490px)": {
      width: "380px",
      margin: "0px auto",
    },
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
                          VEHICLES WE SERVICE
                        </h3>
                      </div>
                      <h2 className="vehicle-header">{props.vehicleBrand}</h2>
                    </div>
                  </div>
                  <div className="col-lg-6 vehicle-brand-container">
                    <div
                      className={`vehicles-header-right-banner ${
                        animateOpacity ? "show" : ""
                      }`}
                    >
                      <img className="vehicle-bg-car" src={props.vehicleBg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-lg-12 vehicles-path-header-container ${
                animateOpacity ? "show" : ""
              }`}
            >
              <h3 className="vehicle-service-header-1">SERVICES AND REPAIR</h3>
              <h3 className="vehicle-service-header-2">{`OF ${props.vehicleTypeBrand} VEHICLES`}</h3>
            </div>
            <div
              className={`col-lg-6 vehicles-path-p-container ${
                animateOpacity ? "show" : ""
              }`}
            >
              <p className="vehicles-service-p-1">{props.servicePOne}</p>
            </div>
            <div
              className={`col-lg-6 vehicles-path-p-container ${
                animateOpacity ? "show" : ""
              }`}
            >
              <p className="vehicles-path-p-2">{props.servicePTwo}</p>
            </div>
          </div>
          <div className="vehicle-specials-container">
            <Specials />
          </div>
          <div className="row">
            <div
              ref={upperContainerRef}
              className={`vehicle-page-option-container ${
                isVisible ? "float-up" : ""
              }`}
            >
              <div className="banner-text__container">
                <img src={BannerImg} className="banner-img" />
                <h3 className="banner-text">CHECK OUT THE OTHER BRANDS</h3>
              </div>
              <h2 className="vehicle-page-main-header">OTHER BRANDS</h2>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/audi" onClick={handleLinkClick}>
                <div
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "AUDI"
                      ? vehicleBrandStyles.AUDI
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"AUDI"}
                    carBrandP={"Audi"}
                    carBrandImg={Audi}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/bmw" onClick={handleLinkClick}>
                <div
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "BMW"
                      ? vehicleBrandStyles.BMW
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"BMW"}
                    carBrandP={"BMW"}
                    carBrandImg={BMW}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/cadillac" onClick={handleLinkClick}>
                <div
                  className="vehicle-page-vehicle-type-bg"
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "CADILLAC"
                      ? vehicleBrandStyles.CADILLAC
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"CADILLAC"}
                    carBrandP={"Cadillac"}
                    carBrandImg={Cadillac}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/chrystler" onClick={handleLinkClick}>
                <div
                  className="vehicle-page-vehicle-type-bg"
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "CHRYSTLER"
                      ? vehicleBrandStyles.CHRYSTLER
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"CHRYSTLER"}
                    carBrandP={"Chrystler"}
                    carBrandImg={Chrystler}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/chevrolet" onClick={handleLinkClick}>
                <div
                  className="vehicle-page-vehicle-type-bg"
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "CHEVROLET"
                      ? vehicleBrandStyles.CHEVROLET
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"CHEVROLET"}
                    carBrandP={"Chevrolet"}
                    carBrandImg={Chevrolet}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/dodge" onClick={handleLinkClick}>
                <div
                  className="vehicle-page-vehicle-type-bg"
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "DODGE"
                      ? vehicleBrandStyles.DODGE
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"DODGE"}
                    carBrandP={"Dodge"}
                    carBrandImg={Dodge}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/ford" onClick={handleLinkClick}>
                <div
                  className="vehicle-page-vehicle-type-bg"
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "FORD"
                      ? vehicleBrandStyles.FORD
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"FORD"}
                    carBrandP={"Ford"}
                    carBrandImg={Ford}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/fiat" onClick={handleLinkClick}>
                <div
                  className="vehicle-page-vehicle-type-bg"
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "FIAT"
                      ? vehicleBrandStyles.FIAT
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"FIAT"}
                    carBrandP={"Fiat"}
                    carBrandImg={Fiat}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/honda" onClick={handleLinkClick}>
                <div
                  className="vehicle-page-vehicle-type-bg"
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "HONDA"
                      ? vehicleBrandStyles.HONDA
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"HONDA"}
                    carBrandP={"Honda"}
                    carBrandImg={Honda}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link className="link" to="/hyundai" onClick={handleLinkClick}>
                <div
                  className="vehicle-page-vehicle-type-bg"
                  style={{
                    borderRadius: "6px",
                    ...(props.vehicleTypeBrand === "HYUNDAI"
                      ? vehicleBrandStyles.HYUNDAI
                      : defaultBackgroundStyle),
                  }}
                >
                  <VehicleTypes
                    carBrand={"HYUNDAI"}
                    carBrandP={"Hyundai"}
                    carBrandImg={Hyundai}
                  />
                </div>
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

export default VehiclePage;
