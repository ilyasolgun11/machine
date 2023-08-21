import "./Reviews.css";
import { useRef, useEffect } from "react";
import BannerImg from "../HeroSection/images/banner-shape.png";
import Slider from "react-slick";
import ReviewStars from "./ReviewStars";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Man1 from "./images/man-1.png";
import Man2 from "./images/man-2.png";
import Women from "./images/women-1.png";
import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    text: `"Great service and honest mechanic I always come when I have an issue with my cars and always recommend this place to everybody."`,
    name: "WILLIAM DERAL",
  },
  {
    id: 2,
    text: `"Really great service! They're extremely transparent, good communicators, and work quickly and efficiently."`,
    name: "ERIK JOHNSON",
  },
  {
    id: 2,
    text: `"The service here is unparalleled. I look for honesty and service at a car shop and this place delivers consistently."`,
    name: "MEI LIN",
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviewImagesRef = useRef(null);

  const handleScroll = () => {
    if (reviewImagesRef.current) {
      const elementTop = reviewImagesRef.current.getBoundingClientRect().top;
      const windowBottom = window.innerHeight;
      if (elementTop < windowBottom) {
        reviewImagesRef.current.classList.add("float-left");
      } else {
        reviewImagesRef.current.classList.remove("float-left");
      }
    }
  };

  useEffect(() => {
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
    <div className="reviews-container">
      <div className="review-left-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 review-left">
            <div className="banner-text__container">
              <img src={BannerImg} className="banner-img" />
              <h3 className="banner-text">CUSTOMER REVIEWS</h3>
            </div>
            <h2 className="reviews-header-1">100% APPROVED</h2>
            <h2 className="reviews-header-2">BY CUSTOMERS</h2>
            <Link to="/reviews" onClick={handleLinkClick} className="link">
              <button className="hero-about-btn">
                SEE ALL REVIEWS
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
            <div className="review-carousel-container">
              <div className="review-stars"></div>
              <Slider {...settings}>
                {reviews.map((review) => (
                  <div key={review.id} className="review-slide">
                    <ReviewStars />
                    <p className="review-text">{review.text}</p>
                    <h4 className="review-name">{review.name}</h4>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-lg-6 review-right">
            <div className="review-images-container" ref={reviewImagesRef}>
              <img src={Man1} className="review-man-1 review-image" />
              <img src={Man2} className="review-man-2 review-image" />
              <img src={Women} className="review-women review-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
