import React from "react";
import "./EnginesPath.css";
import SeriveType from "../ServiceType/ServiceType";
import EngineImg from "../images/engines.jpg";

const EnginesPath = () => {
  return (
    <div>
      <SeriveType
        bannerText={"ENGINE DIAGNOSTIC"}
        header={
          <>
            <span className="engines-path-header-style">ENGINES</span>
          </>
        }
        importanceHeader1={"THE IMPORTANCE OF"}
        importanceHeader2={"ENGINE DIAGNOSTIC"}
        importanceParagraph1={
          <>
            If you suspect that your car or truck is not performing the way it
            should, there's a decent chance you will know all about it from the
            computer inside your vehicle. A lot of people don't pay much
            attention to the{" "}
            <span className="services-type-p-special">check engine light</span>{" "}
            of their vehicles and some even disable it.{" "}
          </>
        }
        importanceParagraph2={
          <>
            Little do they know, this mistake will cost them eventually, because
            not paying attention to the warning signs during the early states of
            a problem would result in a total shutdown of your vehicle. That's
            why, you shouldn't hesitate to{" "}
            <span className="services-type-p-special">get in touch</span> with
            our auto repair shop, as soon{" "}
            <span className="services-type-p-special">
              as you see a warning light
            </span>
            . Our certified technicians will diagnose the problem and provide
            the appropriate solution.{" "}
          </>
        }
        bannerBg={EngineImg}
      />
    </div>
  );
};

export default EnginesPath;
