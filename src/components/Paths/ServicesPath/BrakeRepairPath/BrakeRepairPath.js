import React from "react";
import "./BrakeRepairPath.css";
import SeriveType from "../ServiceType/ServiceType";
import brakeRepairBg from "../images/brakes.jpg";

const BrakeRepairPath = () => {
  return (
    <div>
      <SeriveType
        bannerText={"BRAKE REPAIR AND SERVICES"}
        header={
          <>
            {" "}
            <span className="brake-repair-header-path-style">BRAKE REPAIR</span>
          </>
        }
        importanceHeader1={"THE IMPORTANCE OF"}
        importanceHeader2={"BRAKE REPAIR"}
        importanceParagraph1={
          <>
            We offer top-notch brake repair and service on all vehicle makes and
            models. Our team of{" "}
            <span className="services-type-p-special">
              experienced technicians
            </span>{" "}
            uses only state-of-the-art diagnostic equipment to ensure that your
            vehicle's brake system will be{" "}
            <span className="services-type-p-special">
              serviced and cared for accordingly
            </span>
            . We invite you to visit our auto repair shop for a free brake fluid
            and brake system inspection so that you can be undisturbed about
            your vehicle' condition if you decide to go on a long trip across
            the country.
          </>
        }
        importanceParagraph2={
          <>
            <span className="services-type-p-special">
              Our skilled technicians
            </span>{" "}
            will inspect all major components of your vehicle's brake system,
            including calipers, pads and shoes, hardware, and rotors, and they
            will tell you what type of services have to be performed.
            Additionally, we always provide our customer's with a written
            estimate of all the repairs and services that need to be performed.
            After you read it and approve it, only then will we start doing any
            type of work on your vehicle.{" "}
          </>
        }
        bannerBg={brakeRepairBg}
      />
    </div>
  );
};

export default BrakeRepairPath;
