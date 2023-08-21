import "./BMWPath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import BMWBg from "./images/bmw-bg.png";

const BMWPath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="bmw-path-header">BMW</span>
          </>
        }
        vehicleTypeBrand={"BMW"}
        vehicleBg={BMWBg}
        servicePOne={
          <>
            BMW, a subsidiary of the German automobile manufacturer Volkswagen,
            is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>{" "}
            automakers in the world. The company name is derived from the
            surname of its{" "}
            <span className="vehicle-span-special">founder, Karl Rapp</span>.
            “Horch” means “listen” in German; and BMW is the Latin word for
            listen. But you didn't invest in an BMW based on clever word play.
            You own an BMW because you care about investing in quality.
          </>
        }
        servicePTwo={
          <>
            As a BMW owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of <span className="vehicle-span-special">BMW vehicles</span>{" "}
            in the area. From the moment you walk through our door until you
            leave satisfied with the results, our team strives to supply only
            the best service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default BMWPath;
