import "./DodgePath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import DodgeImg from "./images/dodge-car.png";

const DodgePath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="bmw-path-header">DODGE</span>
          </>
        }
        vehicleTypeBrand={"DODGE"}
        vehicleBg={DodgeImg}
        servicePOne={
          <>
            Dodge, a subsidiary of the German automobile manufacturer
            Volkswagen, is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>{" "}
            automakers in the world. The company name is derived from the
            surname of its{" "}
            <span className="vehicle-span-special">
              founder, John Francis Dodge
            </span>
            . “Horch” means “listen” in German; and Dodge is the Latin word for
            listen. But you didn't invest in a Dodge based on clever word play.
            You own a Dodge because you care about investing in quality.
          </>
        }
        servicePTwo={
          <>
            As an Dodge owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of{" "}
            <span className="vehicle-span-special">Dodge vehicles</span> in the
            area. From the moment you walk through our door until you leave
            satisfied with the results, our team strives to supply only the best
            service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default DodgePath;
