import React, { useEffect, useRef, useState } from "react";
import "./FreeAppointment.css";
import BannerImg from "../HeroSection/images/banner-shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FreeAppointment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
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

  return (
    <div className="free-ap-container">
      <div className="container">
        <div
          ref={upperContainerRef}
          className={`free-ap-upper-container ${isVisible ? "float-up" : ""}`}
        >
          <div className="banner-text__container">
            <img src={BannerImg} className="banner-img" />
            <h3 className="banner-text">GET A FREE APPOINTMENT</h3>
          </div>
          <h2 className="free-ap-header-1">GET A FREE</h2>
          <h2 className="free-ap-header-2">APPOINTMENT</h2>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="row">
            {isFormSubmitted && (
              <div class="alert alert-success" role="alert">
                You are Booked!{" "}
                <FontAwesomeIcon
                  className="free-ap-check-icon"
                  icon={faCheck}
                  style={{ color: "#000" }}
                />
              </div>
            )}

            <div className="col-lg-4 free-ap-item-style">
              <label id="name" className="free-ap-name-label">
                Name
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  class="form-control free-ap-name"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </label>
            </div>
            <div className="col-lg-4 free-ap-item-style">
              <label id="phone" className="free-ap-phone-label">
                Phone
                <input
                  required
                  id="phone"
                  name="phone"
                  type="text"
                  class="form-control free-ap-phone"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </label>
            </div>
            <div className="col-lg-4 free-ap-item-style">
              <label id="email" className="free-ap-email-label">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  class="form-control free-ap-email"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </label>
            </div>
            <div className="col-lg-4 free-ap-item-style">
              <label id="make" className="free-ap-model-label">
                Make/Model
                <input
                  required
                  id="make"
                  type="text"
                  name="make"
                  class="form-control free-ap-model"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </label>
            </div>
            <div className="col-lg-4 free-ap-item-style">
              <label id="date" className="free-ap-date-label">
                Date
                <input
                  required
                  id="date"
                  name="date"
                  type="date"
                  class="form-control free-ap-date"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </label>
            </div>
            <div className="col-lg-4 free-ap-send-style">
              <button type="submit" className="free-ap-send">
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeAppointment;
