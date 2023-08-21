import React from "react";
import "./OilChangePath.css";
import SeriveType from "../ServiceType/ServiceType";
import OilChangeImg from "../images/oil-change.jpeg";

const OilChangePath = () => {
  return (
    <div>
      <SeriveType
        bannerText={"OIL CHANGE SERVICE"}
        header={
          <>
            <span className="oil-change-path-header-style">OIL CHANGE</span>
          </>
        }
        importanceHeader1={"THE IMPORTANCE OF"}
        importanceHeader2={"OIL CHANGES"}
        importanceParagraph1={
          <>
            Vehicle maintenance is extremely important and the easiest thing a
            vehicle owner can do is get the oil changed. At our auto service
            facility we have been performing oil changes for over{" "}
            <span className="services-type-p-special">32 years</span>.
            <span className="services-type-p-special">
              Regularly performed oil changes
            </span>{" "}
            ensure that your engine is not being forced to work harder than it
            should be.{" "}
          </>
        }
        importanceParagraph2={
          <>
            We perform oil changes based on manufacturer specifications and we
            carry a variety of different{" "}
            <span className="services-type-p-special">
              motor oil to accommodate different vehicle
            </span>{" "}
            makes and models. Give us a call today to schedule an appointment
            for your next oil change.{" "}
          </>
        }
        bannerBg={OilChangeImg}
      />
    </div>
  );
};

export default OilChangePath;
