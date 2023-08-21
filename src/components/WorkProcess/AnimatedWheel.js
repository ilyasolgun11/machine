import React, { useEffect, useState } from "react";

const AnimatedWheel = ({ imageUrl }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const wheelElement = document.querySelector(".process-img");
      const wheelPosition = wheelElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Set shouldAnimate to true when the wheel is within the viewport
      setShouldAnimate(wheelPosition < windowHeight);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img
      src={imageUrl}
      className={`process-img ${shouldAnimate ? "wheel-move-left" : ""}`}
      alt="Wheel"
    />
  );
};

export default AnimatedWheel;
