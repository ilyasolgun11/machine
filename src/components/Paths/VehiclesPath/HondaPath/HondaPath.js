import "./HondaPath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import HondaImg from "./images/honda-car.png";

const HondaPath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="bmw-path-header">HONDA</span>
          </>
        }
        vehicleTypeBrand={"HONDA"}
        vehicleBg={HondaImg}
        servicePOne={
          <>
            Honda, a subsidiary of the japanese automobile manufacturer Toyota,
            is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>{" "}
            automakers in the world. The company name is derived from the
            surname of its founder, Soichiro Honda. “Horch” means “listen” in
            German; and Honda is the Latin word for listen. But you didn’t
            invest in a Honda based on clever word play. You own a Honda because
            you care about investing in quality.
          </>
        }
        servicePTwo={
          <>
            As a Honda owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of{" "}
            <span className="vehicle-span-special">Honda vehicles</span> in the
            area. From the moment you walk through our door until you leave
            satisfied with the results, our team strives to supply only the best
            service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default HondaPath;
