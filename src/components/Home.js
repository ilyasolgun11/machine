import React, { useEffect, useState } from "react";
import "./Home.css";
import HeroSection from "./HeroSection/HeroSection";
import HeroAbout from "./HeroAbout/HeroAbout";
import OurServices from "./OurServices/OurServices";
import WorkProcess from "./WorkProcess/WorkProcess";
import Vehicles from "./Vehicles/Vehicles";
import Specials from "./Specials/Specials";
import Reviews from "./Reviews/Reviews";
import FreeAppointment from "./FreeAppointment/FreeAppointment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-style">
      <main>
        <HeroSection />
      </main>
      <section>
        <HeroAbout />
      </section>
      <section>
        <OurServices />
      </section>
      <section>
        <WorkProcess />
      </section>
      <section>
        <Vehicles />
      </section>
      <section>
        <Specials />
      </section>
      <article>
        <Reviews />
      </article>
      <section>
        <FreeAppointment />
      </section>
      {showScrollButton && (
        <div
          className={`scroll-button ${showScrollButton ? "show" : ""}`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            className="up-arrow"
            icon={faAngleUp}
            style={{ color: "#d80000" }}
          />
          UP
        </div>
      )}
    </div>
  );
};

export default Home;
