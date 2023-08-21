import React from "react";
import "./DiagnosticPath.css";
import SeriveType from "../ServiceType/ServiceType";
import DiagnosticImg from "../images/diagnostic.jpg";

const DiagnosticPath = () => {
  return (
    <div>
      <SeriveType
        bannerText={"CAR DIAGNOSTIC SERVICE"}
        header={"DIAGNOSTIC"}
        importanceHeader1={"THE IMPORTANCE OF"}
        importanceHeader2={"CAR DIAGNOSTIC"}
        importanceParagraph1={
          <>
            Annual checkups from your physician keep you in good health, right?
            Well, the same goes for your car—regular diagnostic tests can detect
            problems with your vehicle before they{" "}
            <span className="services-type-p-special">
              require expensive repairs
            </span>
            , or worse, leave you stranded on the side of the road after a
            breakdown. And while many people think diagnostic tests are only
            necessary when the check engine light comes on, there are many
            benefits to taking a proactive{" "}
            <span className="services-type-p-special">approach to car</span>{" "}
            maintenance.{" "}
          </>
        }
        importanceParagraph2={
          <>
            Of all the technological advances in the automotive sector over the
            decades, one of{" "}
            <span className="services-type-p-special">the most beneficial</span>{" "}
            to consumers and auto technicians alike has been the computerization
            of the car's components. Using specialized software,{" "}
            <span className="services-type-p-special">
              car diagnostic tools
            </span>{" "}
            quickly and accurately point to problem areas in a car's engine or
            elsewhere, thanks to built-in processors, microchips and sensors.
          </>
        }
        bannerBg={DiagnosticImg}
      />
    </div>
  );
};

export default DiagnosticPath;
