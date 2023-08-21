import { useEffect, useState, useRef } from "react";
import "./WorkProcess.css";
import BannerImg from "../HeroSection/images/banner-shape.png";
import Wheel from "../OurServices/images/wheel.png";

const WorkProcess = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const workProcessRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollAmount(scrollPosition);
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(workProcessRef.current);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer && workProcessRef.current) {
        observer.unobserve(workProcessRef.current);
      }
    };
  }, []);

  const maxTranslateX = -(scrollAmount / 6);
  const imageWidth = 500;

  const maxVisibleWidth = (window.innerWidth - imageWidth) / 2 - 300;

  const translateX = isVisible ? Math.min(maxTranslateX, maxVisibleWidth) : 0;
  const rotation = isVisible ? scrollAmount * 0.3 : 0;

  return (
    <div className="work-process-main">
      <img
        ref={workProcessRef}
        src={Wheel}
        alt="Wheel"
        className="work-process-car-engine-img work-process-scroll-up-img"
        style={{
          transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
        }}
      />
      <div className="work-process__container">
        <div className="work-process-bg"></div>
        <div className="work-process-bg-2"></div>

        <div className="container">
          <div className="row work-process__inner-container">
            <div className="col-lg-3 work-process__first">
              <h2 className="work-process__header-1">OUR WORK</h2>
              <h2 className="work-process__header-2">PROCESS</h2>
            </div>
            <div className="col-lg-3 work-process__second">
              <div className="work-process__second-inner">
                <div className="banner-text__container">
                  <img src={BannerImg} className="banner-img" />
                  <h3 className="banner-text work-process-number">01.</h3>
                </div>
                <h3 className="work-process__second-header-1">REQUEST</h3>
                <h3 className="work-process__second-header-2">YOUR QUOTE</h3>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="work-process__third-inner">
                <div className="banner-text__container">
                  <img src={BannerImg} className="banner-img" />
                  <h3 className="banner-text work-process-number">02.</h3>
                </div>
                <h3 className="work-process__third-header-1">BRING YOUR</h3>
                <h3 className="work-process__third-header-2">VEHICLE</h3>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="work-process__third-inner">
                <div className="work-process-bg-2"></div>
                <div className="banner-text__container">
                  <img src={BannerImg} className="banner-img" />
                  <h3 className="banner-text work-process-number">03.</h3>
                </div>
                <h3 className="work-process__fourth-header-1">GET IT</h3>
                <h3 className="work-process__fourth-header-2">REPAIRED</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
