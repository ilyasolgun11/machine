import React, { useEffect, useRef, useState } from "react";
import "./AppointmentPath.css";
import BannerShape from "../../HeroSection/images/banner-shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../LoadingSpinner";
import SpecialsImg from "../SpecialsPath/images/specials-img.png";

const AppointmentPath = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const upperContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [animateFloatContainer, setAnimateFloatContainer] = useState(false);
  const [animateOpacity, setAnimateOpacity] = useState(false);

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form["name"].value;
    const phone = form["phone"].value;
    const email = form["email"].value;
    const makeModel = form["make"].value;
    const date = form["date"].value;

    if (name && phone && email && makeModel && date) {
      setIsFormSubmitted(true);

      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 3000);
    } else {
      setIsFormSubmitted(false);
    }
  };

  const handleDropdownItemClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ap-path-container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="container">
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
                        <img
                          src={BannerShape}
                          className="banner-img"
                          alt="Banner"
                        />
                        <h3 className="banner-text work-process-number services-path-p services-path-pp">
                          GET AN APPOINTMENT
                        </h3>
                      </div>
                      <h2 className="appointment-path-header">APPOINTMENT</h2>
                    </div>
                  </div>
                  <div className="col-lg-6 vehicle-brand-container">
                    <div
                      className={`vehicles-header-right-banner ${
                        animateOpacity ? "show" : ""
                      }`}
                    >
                      <img
                        className="vehicle-bg-car "
                        src={SpecialsImg}
                        alt="Specials"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleFormSubmit} className="ap-form">
            <div className="container">
              <div className="row">
                <h3 className="ap-personal-header">PERSONAL INFORMATION</h3>
                <div className="col-lg-4 free-ap-item-style">
                  <label
                    htmlFor="name"
                    className="free-ap-name-label ap-label-style"
                  >
                    Name
                    <input
                      required
                      id="name"
                      name="name"
                      type="text"
                      className="form-control free-ap-name  ap-input-style"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </label>
                </div>
                <div className="col-lg-4 free-ap-item-style">
                  <label
                    htmlFor="phone"
                    className="free-ap-phone-label ap-label-style"
                  >
                    Phone
                    <input
                      required
                      id="phone"
                      name="phone"
                      type="text"
                      className="form-control free-ap-phone ap-input-style"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </label>
                </div>
                <div className="col-lg-4 free-ap-item-style">
                  <label
                    htmlFor="email"
                    className="free-ap-email-label ap-label-style"
                  >
                    Email
                    <input
                      required
                      name="email"
                      type="email"
                      className="form-control free-ap-email ap-input-style"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </label>
                </div>
                <h3 className="ap-vehicle-header">VEHICLE INFORMATION</h3>
                <div className="col-lg-4 free-ap-item-style">
                  <label
                    htmlFor="make"
                    className="free-ap-email-label ap-label-style"
                  >
                    Make
                    <input
                      required
                      name="make"
                      type="text"
                      className="form-control free-ap-email ap-input-style"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </label>
                </div>
                <div className="col-lg-4 free-ap-item-style">
                  <label
                    htmlFor="model"
                    className="free-ap-email-label ap-label-style"
                  >
                    Model
                    <input
                      required
                      name="model"
                      type="text"
                      className="form-control free-ap-email ap-input-style"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </label>
                </div>
                <div className="col-lg-4 free-ap-item-style">
                  <label
                    htmlFor="email"
                    className="free-ap-email-label ap-label-style"
                  >
                    Year
                    <input
                      required
                      name="year"
                      type="year"
                      className="form-control free-ap-email ap-input-style"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </label>
                </div>
                <div className="col-lg-4 free-ap-item-style">
                  <label
                    htmlFor="type"
                    className="free-ap-email-label ap-label-style"
                  >
                    Type
                    <input
                      required
                      name="type"
                      type="text"
                      className="form-control free-ap-email ap-input-style"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </label>
                </div>
                <div className="col-lg-4 free-ap-item-style">
                  <label
                    htmlFor="engine"
                    className="free-ap-email-label ap-label-style"
                  >
                    Engine Type
                    <input
                      required
                      name="engine"
                      type="text"
                      className="form-control free-ap-email ap-input-style"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </label>
                </div>
                <div className="col-lg-4 free-ap-item-style">
                  <label
                    htmlFor="transmission"
                    className="free-ap-email-label ap-label-style"
                  >
                    Transmission
                    <input
                      required
                      name="transmission"
                      type="text"
                      className="form-control free-ap-email ap-input-style"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </label>
                </div>
                <div className="col-lg-12 free-ap-item-style">
                  <div class="input-group">
                    <label
                      htmlFor="case-description"
                      className="free-ap-email-label ap-label-style"
                    >
                      Case Description
                      <textarea
                        required
                        class="form-control ap-text-area"
                        aria-label="With textarea"
                      ></textarea>
                    </label>
                  </div>
                </div>
                <h3 className="ap-vehicle-header">CHOOSE TIME & DATE</h3>
                <div className="col-lg-6 free-ap-item-style">
                  <div class="input-group">
                    <label
                      htmlFor="case-description"
                      className="free-ap-email-label ap-label-style"
                    >
                      Time
                      <select
                        class="ap-select"
                        aria-label="Default select example"
                      >
                        <option className="select-option" selected>
                          09:00
                        </option>
                        <option className="select-option" value="1">
                          10:00
                        </option>
                        <option className="select-option" value="2">
                          11:00
                        </option>
                        <option className="select-option" value="3">
                          12:00
                        </option>
                        <option className="select-option" value="4">
                          13:00
                        </option>
                        <option className="select-option" value="5">
                          14:00
                        </option>
                        <option className="select-option" value="6">
                          15:00
                        </option>
                        <option className="select-option" value="7">
                          16:00
                        </option>
                        <option className="select-option" value="8">
                          17:00
                        </option>
                        <option className="select-option" value="9">
                          18:00
                        </option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 free-ap-item-style">
                  <div class="input-group">
                    <label
                      htmlFor="year"
                      className="free-ap-email-label ap-label-style"
                    >
                      Date
                      <input
                        required
                        name="date"
                        type="date"
                        className="form-control free-ap-email ap-input-style"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </label>
                  </div>
                </div>
                <h3 className="ap-vehicle-header">SEND REQUEST</h3>
                {isFormSubmitted && (
                  <div
                    className="alert alert-success ap-sent-info"
                    role="alert"
                  >
                    Information sent!{" "}
                    <FontAwesomeIcon
                      className="free-ap-check-icon"
                      icon={faCheck}
                      style={{ color: "#FFF" }}
                    />
                  </div>
                )}
                <div className="col-lg-6 free-ap-item-style">
                  <div class="input-group">
                    <label
                      htmlFor="case-description"
                      className="free-ap-email-label ap-label-style"
                    >
                      Special Offer
                      <select
                        class="ap-select"
                        aria-label="Default select example"
                      >
                        <option className="select-option" selected>
                          Full Synthetic Oil Change (€54.95)
                        </option>
                        <option className="select-option" value="1">
                          Wheel Alignment (€34.49)
                        </option>
                        <option className="select-option" value="2">
                          Brake Service (€24.95)
                        </option>
                        <option className="select-option" value="3">
                          Car Care Package (€22.39)
                        </option>
                        <option className="select-option" value="5">
                          Travel Special (€27.89)
                        </option>
                        <option className="select-option" value="6">
                          Engine Special (€44.99)
                        </option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 free-ap-item-style ap-send-style">
                  <button type="submit" className="free-ap-send ap-send">
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AppointmentPath;
