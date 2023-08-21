import "./ChevroletPath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import ChevroletImg from "./images/chevrolet-car.png";

const ChevroletPath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="chevrolet-path-header">CHEVROLET</span>
          </>
        }
        vehicleTypeBrand={"CHEVROLET"}
        vehicleBg={ChevroletImg}
        servicePOne={
          <>
            Chevrolet, a subsidiary of the German automobile manufacturer
            Volkswagen, is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>{" "}
            automakers in the world. The company name is derived from the
            surname of its{" "}
            <span className="vehicle-span-special">
              founder, Arthur Chevrolet
            </span>
            . “Horch” means “listen” in German; and Chevrolet is the Latin word
            for listen. But you didn't invest in an Chevrolet based on clever
            word play. You own an Chevrolet because you care about investing in
            quality.
          </>
        }
        servicePTwo={
          <>
            As an Chevrolet owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of <span className="vehicle-span-special">Chevrolet</span>{" "}
            vehicles in the area. From the moment you walk through our door
            until you leave satisfied with the results, our team strives to
            supply only the best service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default ChevroletPath;
