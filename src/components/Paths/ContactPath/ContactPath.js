import React, { useEffect, useState } from "react";
import "./ContactPath.css";
import BannerImg from "../../HeroSection/images/banner-shape.png";
import LoadingSpinner from "../../Paths/LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCar, faCalendar } from "@fortawesome/free-solid-svg-icons";

const ContactPath = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateFloatContainer, setAnimateFloatContainer] = useState(false);
  const [animateOpacity, setAnimateOpacity] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

  const formSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <div className="services-path">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
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
                    ></div>
                    <div
                      className={`services-float-container review-image ${
                        animateFloatContainer ? "float-left" : ""
                      }`}
                    >
                      <div className="banner-text__container">
                        <img src={BannerImg} className="banner-img" />
                        <h3 className="banner-text work-process-number services-path-p services-path-pp">
                          CONTACT US
                        </h3>
                      </div>
                      <h2 className="services-path-header service-type-header">
                        CONTACT
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 service-type-importance-main-container contact-header-upper-container">
                  <div
                    className={`service-type-importance-container contact-header-upper-container ${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <h2 className="contact-header-1">LOCATION &</h2>
                    <h2 className="contact-header-2">INFORMATION</h2>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className={`contact-path-number-main-container ${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <div className="contact-path-number-container">
                      <FontAwesomeIcon
                        className="contact-path-number-icon"
                        icon={faPhone}
                        style={{ color: "#1e1e1e" }}
                      />
                      <h3 className="contact-path-number">06-1234-5678</h3>
                    </div>
                    <h3 className="contact-path-address">
                      30-32/A, 00176 Roma RM, Italy
                    </h3>
                    <h3 className="contact-path-address">MACHINE@GMAIL.COM</h3>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div
                    className={`contact-path-number-main-container ${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <div className="contact-path-number-container">
                      <FontAwesomeIcon
                        className="contact-path-number-icon"
                        icon={faCar}
                        style={{ color: "#1e1e1e" }}
                      />
                      <h3 className="contact-path-number">
                        HOURS OF OPERATION
                      </h3>
                    </div>
                    <h3 className="contact-path-hours">
                      MON - FRI: 8:30 AM - 6:00 PM
                    </h3>
                    <h3 className="contact-path-hours">
                      SAT: 8:30 AM - 2:00 PM
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className={`contact-path-number-main-container ${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <div className="contact-path-number-container">
                      <FontAwesomeIcon
                        className="contact-path-number-icon"
                        icon={faCalendar}
                        style={{ color: "#1e1e1e" }}
                      />
                      <h3 className="contact-path-number">FREE APPOINTMENT</h3>
                    </div>
                    <button className="contact-path-appointment-btn">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <div className="container">
                <form onSubmit={formSubmit}>
                  <div className="row">
                    <h2 className="contact-form-header-1">CONTACT</h2>
                    <h2 className="contact-form-header-2">FORM</h2>
                    {isFormSubmitted && (
                      <div
                        className="col-lg-12 alert alert-success contact-message-pop-up"
                        role="alert"
                      >
                        Form sent successfully!
                      </div>
                    )}
                    <div className="col-lg-4">
                      <input
                        placeholder="Name"
                        type="name"
                        className="contact-input-style"
                        required
                      />
                    </div>
                    <div className="col-lg-4">
                      <input
                        placeholder="Phone"
                        type="phone"
                        className="contact-input-style"
                        required
                      />
                    </div>
                    <div className="col-lg-4">
                      <input
                        placeholder="Email"
                        type="email"
                        className="contact-input-style"
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="contact-textarea"
                        placeholder="Message"
                      />
                    </div>
                    <div className="col-lg-12">
                      <button className="contact-send" type="submit">
                        SEND
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPath;
