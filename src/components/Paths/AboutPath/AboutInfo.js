import React from "react";

const AboutInfo = (props) => {
  return (
    <div className="about-info-container">
      <div className="about-info-upper-container">
        <div className="about-info-icon">{props.infoIcon}</div>
        <h3 className="about-info-number">{props.number}</h3>
      </div>
      <h4 className="about-info-description">{props.description}</h4>
    </div>
  );
};

export default AboutInfo;
