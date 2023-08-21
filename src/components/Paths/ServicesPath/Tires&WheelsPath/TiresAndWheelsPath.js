import React from "react";
import "./TiresAndWheelsPath.css";
import SeriveType from "../ServiceType/ServiceType";
import TiresImg from "../images/tires-and-wheels.jpg";

const TiresAndWheelsPath = () => {
  return (
    <div>
      <SeriveType
        bannerText={"TIRES & WHEELS SERVICE"}
        header={
          <>
            {" "}
            <span className="tires-and-wheels-header-path-style">
              TIRES & WHEELS
            </span>
          </>
        }
        importanceHeader1={"WHEEL ALIGNMENT AND "}
        importanceHeader2={"TIRE INSTALLATION"}
        importanceParagraph1={
          <>
            A wheel alignment service is{" "}
            <span className="services-type-p-special">very important</span>{" "}
            because it can expand the life of your tires. Even the smallest
            alignment issue can result in an uneven tire wear. Once your wheels
            are properly aligned, it's smooth cruising ahead,{" "}
            <span className="services-type-p-special">
              saving you tire wear
            </span>
            , fuel, and ultimately…money.{" "}
          </>
        }
        importanceParagraph2={
          <>
            If you need help with your tire purchase, some to us! We can help
            you compare tire specifications and prices before you buy, to ensure
            you are getting the best new tires for your{" "}
            <span className="services-type-p-special">needs and budget</span>.
          </>
        }
        bannerBg={TiresImg}
      />
    </div>
  );
};

export default TiresAndWheelsPath;
