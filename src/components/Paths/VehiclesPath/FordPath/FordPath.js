import "./FordPath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import FordImg from "./images/ford-car.png";

const FordPath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="bmw-path-header">FORD</span>
          </>
        }
        vehicleTypeBrand={"FORD"}
        vehicleBg={FordImg}
        servicePOne={
          <>
            Ford, a subsidiary of the German automobile manufacturer Volkswagen,
            is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>{" "}
            automakers in the world. The company name is derived from the
            surname of its{" "}
            <span className="vehicle-span-special">founder, Henry Ford</span>.
            “Horch” means “listen” in German; and Ford is the Latin word for
            listen. But you didn't invest in a Ford based on clever word play.
            You own a Ford because you care about investing in quality.
          </>
        }
        servicePTwo={
          <>
            As a Ford owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of{" "}
            <span className="vehicle-span-special">Ford vehicles</span> in the
            area. From the moment you walk through our door until you leave
            satisfied with the results, our team strives to supply only the best
            service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default FordPath;
