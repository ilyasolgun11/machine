import "./HyundaiPath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import HyundaiCar from "./images/hyundai-car.png";

const HyundaiPath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="hyundai-path-header">HYUNDAI</span>
          </>
        }
        vehicleTypeBrand={"HYUNDAI"}
        vehicleBg={HyundaiCar}
        servicePOne={
          <>
            Hyundai, a subsidiary of the South Korean automobile manufacturer
            KIA, is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>{" "}
            automakers in the world. The company name is derived from the
            surname of its{" "}
            <span className="vehicle-span-special">founder, Chung Ju-yung</span>
            . “Horch” means “listen” in German; and Hyundai is the Latin word
            for listen. But you didn't invest in a Hyundai based on clever word
            play. You own a Hyundai because you care about investing in quality.
          </>
        }
        servicePTwo={
          <>
            As a Hyundai owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of{" "}
            <span className="vehicle-span-special">Hyundai vehicles</span> in
            the area. From the moment you walk through our door until you leave
            satisfied with the results, our team strives to supply only the best
            service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default HyundaiPath;
