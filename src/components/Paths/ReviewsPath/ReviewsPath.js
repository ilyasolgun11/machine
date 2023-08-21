// ReviewsPath.js

import React, { useEffect, useState, useRef } from "react";
import "./ReviewsPath.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import ReviewsItem from "./ReviewsItem/ReviewsItem";
import BannerImg from "../../HeroSection/images/banner-shape.png";
import LoadingSpinner from "../../Paths/LoadingSpinner";
import { googleReviews, yelpReviews } from "./ReviewsInfo";

const ReviewsPath = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateFloatContainer, setAnimateFloatContainer] = useState(false);
  const [animateOpacity, setAnimateOpacity] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const upperContainerRef = useRef(null);
  const [activePlatform, setActivePlatform] = useState("google");

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
                    ></div>
                    <div
                      className={`services-float-container review-image ${
                        animateFloatContainer ? "float-left" : ""
                      }`}
                    >
                      <div className="banner-text__container">
                        <img
                          src={BannerImg}
                          className="banner-img"
                          alt="Banner"
                        />
                        <h3 className="banner-text work-process-number services-path-p services-path-pp">
                          %100 APPROVED REVIEWS
                        </h3>
                      </div>
                      <h2 className="vehicles-path-header about-header-text reviews-path-header">
                        REVIEWS
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="review-platform-buttons">
                  <button
                    className={`review-platform-button review-path-google-btn ${
                      activePlatform === "google" ? "active" : ""
                    }`}
                    onClick={() => setActivePlatform("google")}
                  >
                    Google
                  </button>
                  <button
                    className={`review-platform-button review-path-yelp-btn ${
                      activePlatform === "yelp" ? "active" : ""
                    }`}
                    onClick={() => setActivePlatform("yelp")}
                  >
                    Yelp
                  </button>
                </div>
                {activePlatform === "google"
                  ? googleReviews.map((review, index) => (
                      <div className="col-lg-4 google-item-container">
                        <ReviewsItem
                          key={index}
                          text={review.quote}
                          name={review.name}
                        />
                      </div>
                    ))
                  : yelpReviews.map((review, index) => (
                      <div className="col-lg-4 yelp-item-container">
                        <ReviewsItem
                          key={index}
                          text={review.quote}
                          name={review.name}
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsPath;
