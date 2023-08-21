import React, { useEffect, useState } from "react";
import "./AboutPath.css";
import { Link } from "react-router-dom";
import BannerImg from "../../HeroSection/images/banner-shape.png";
import LoadingSpinner from "../../Paths/LoadingSpinner";
import Reviews from "../../Reviews/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import AboutHeaderImg from "./images/about-img.png";
import { useRef } from "react";
import AboutInfo from "./AboutInfo";
//Vehicle Brands

//Vehicle Brands

const AboutPath = () => {
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
                      className={`vehicle-path-header-left-banner ${
                        animateOpacity ? "show" : ""
                      }`}
                    >
                      <img
                        src={AboutHeaderImg}
                        className=" vehicles-type-banner-bg"
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
                          ABOUT MACHINE
                        </h3>
                      </div>
                      <h2 className="vehicles-path-header about-header-text">
                        ABOUT
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row about-second-half-container">
                  <div
                    className={`col-lg-12 vehicles-path-header-container${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <h3 className="vehicle-path-header-1 about-path-header-1">
                      WHO WE ARE
                    </h3>
                  </div>
                  <div
                    className={`col-lg-6 vehicles-path-p-container ${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <p className="about-path-p">
                      <span>Fernando Leclerc</span> became the owner of Machine
                      on <span>June 1st</span>, 1989. Over the years, John has
                      always stated that he did not choose auto repair as his
                      profession, but it was more like vice versa. Machine
                      offers top-quality auto repair and maintenance services to
                      residents of Minneapolis and surrounding communities. We
                      have a team of skilled and {""}
                      <span>ASE-certified</span> technicians who only use the
                      latest diagnostic tools and equipment in the automotive
                      industry. We are a NAPA Auto Care Center where our
                      technicians receive ongoing training to deliver the
                      highest quality of service possible. When you bring your
                      car to us for a repair or maintenance service, we'll treat
                      you with respect and dignity. We won't bother you with any
                      unnecessary expenses.
                    </p>
                  </div>
                  <div
                    className={`col-lg-6 about-p-container-2 vehicles-path-p-container ${
                      animateOpacity ? "show" : ""
                    }`}
                  >
                    <p className="about-path-p">
                      From <span>transmission repair to oil changes</span>,
                      we're here for all of your auto repair needs! Our shop is
                      a full-service, auto repair facility that offers free
                      Wi-Fi, complimentary drinks, and an exceptional customer
                      service. We are always willing to go the extra mile to
                      educate our customers! We'll even bring you out back to
                      physically show you what's going on with your vehicle.
                      Please come by and let us take care of all your car care
                      needs. <span>We're here to help!</span>
                    </p>
                    <button className="about-contact-btn">Contact us</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-second-section-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="certified-header-1">TEAM OF CERTIFIED</h2>
                    <h2 className="certified-header-2">TECHNICIANS</h2>
                  </div>
                  <div className="col-lg-6">
                    <p className="certified-p">
                      We're car people. That means you care about your car, and
                      so do we. Our team of <span>certified technicians</span>{" "}
                      will ensure you receive the best practices in the
                      industry. Come and see for yourself. When you bring your
                      car to us for maintenance or repair, we'll treat you with{" "}
                      <span>respect and dignity</span>. We won't worry you with
                      unnecessary expenses.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-path-icons-container">
                      <img
                        src="https://macchina.vamtam.com/wp-content/uploads/2021/07/certificate-01-1.svg"
                        className="about-path-icon-1"
                      />
                      <img
                        src="https://macchina.vamtam.com/wp-content/uploads/2021/07/certificate-02-1.svg"
                        className="about-path-icon-2"
                      />
                      <img
                        src="https://macchina.vamtam.com/wp-content/uploads/2021/07/certificate-03-1.svg"
                        className="about-path-icon-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row about-path-quallity-container">
                <div
                  ref={upperContainerRef}
                  className={`specials-upper-container col-lg-12 ${
                    isVisible ? "float-up" : ""
                  }`}
                >
                  <h2 className="quality-header">QUALITY</h2>
                </div>
                <div className="col-lg-12">
                  <h2 className="about-path-choose-header">WHY CHOOSE US</h2>
                  <p className="about-path-choose-p">
                    We at Macchina know your car is{" "}
                    <span>more than a tool</span> that gets you from point A to
                    point B, it's your freedom. Your car lets you complete
                    essential daily activities such as traveling to and from
                    work, buying groceries, and picking up the children from
                    school. You depend on it, so it's important your car
                    receives quality <span>repairs and service</span>. When you
                    bring your car to Macchina, we make sure your car leaves
                    trouble-free so you can have your freedom, and your{" "}
                    <span>peace of mind</span>.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-path-info-containers">
              <div className="container about-path-info-cont">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="about-path-info-1">
                      <AboutInfo
                        infoIcon={
                          <FontAwesomeIcon
                            icon={faUser}
                            style={{ color: "#d6131c" }}
                            className="about-path-clients-icon"
                          />
                        }
                        number={"6,000+"}
                        description={"Satisfied Clients"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="about-path-info-2">
                      <AboutInfo
                        infoIcon={
                          <FontAwesomeIcon
                            className="about-path-clients-icon"
                            icon={faCar}
                            style={{ color: "#d6131c" }}
                          />
                        }
                        number={"40+"}
                        description={"Years of Experience"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="about-path-info-3">
                      <AboutInfo
                        infoIcon={
                          <FontAwesomeIcon
                            className="about-path-clients-icon"
                            icon={faTrophy}
                            style={{ color: "#d6131c" }}
                          />
                        }
                        number={"70+"}
                        description={"Awards Won"}
                      />
                    </div>
                  </div>
                </div>
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

export default AboutPath;
