import React, { useRef, useEffect } from "react";
import "./HeroAbout.css";
import BannerImg from "../HeroSection/images/banner-shape.png";
import { Link } from "react-router-dom";

const HeroAbout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        container.style.transform = "translateY(-10%)";
      } else {
        container.style.transform = "translateY(20%)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.style.opacity = "1";
          } else {
            container.style.opacity = "0";
          }
        });
      });

      if (container) {
        observer.observe(container);
      }

      return () => {
        if (container) {
          observer.unobserve(container);
        }
      };
    }

    container.style.opacity = "1";

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
    <div className="hero-about__container">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-about-img__container">
              <img
                src="https://macchina.vamtam.com/wp-content/uploads/2021/04/iStock-1304619397.jpg"
                className="hero-about-mechanic__img"
              />
              <div ref={containerRef} className="hero-about-banner__container">
                <img
                  className="certified-img"
                  src="https://macchina.vamtam.com/wp-content/uploads/2021/04/certificate-01.svg"
                />
                <img
                  className="certified-img"
                  src="https://macchina.vamtam.com/wp-content/uploads/2021/04/certificate-02.svg"
                />
                <img
                  className="certified-img"
                  src="https://macchina.vamtam.com/wp-content/uploads/2021/04/certificate-03.svg"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 hero-about-right">
            <div className="banner-text__container">
              <img src={BannerImg} className="banner-img" />
              <h3 className="banner-text">CAR SERVICES WITH YOU IN MIND</h3>
            </div>
            <h2 className="hero-about-header__1">WE ARE A</h2>
            <h2 className="hero-about-header__2">PROFESSIONAL</h2>
            <h2 className="hero-about-header__3">AUTO REPAIR</h2>
            <h2 className="hero-about-header__4">SERVICE</h2>
            <p className="hero-about-p">
              Since 1967, Macchine has been Rome's trusted auto repair shop,
              offering reliable services for most car models.
            </p>
            <Link to="/about" onClick={handleLinkClick} className="link">
              <button className="hero-about-btn">
                MORE ABOUT US
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
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
