import "./AudiPath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import AudiBg from "./images/audi-bg.png";

const AudiPath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="audi-path-header">AUDI</span>
          </>
        }
        vehicleTypeBrand={"AUDI"}
        vehicleBg={AudiBg}
        servicePOne={
          <>
            Audi, a subsidiary of the German automobile manufacturer Volkswagen,
            is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>{" "}
            automakers in the world. The company name is derived from the
            surname of its{" "}
            <span className="vehicle-span-special">founder, August Horch</span>.
            “Horch” means “listen” in German; and Audi is the Latin word for
            listen. But you didn't invest in an Audi based on clever word play.
            You own an Audi because you care about investing in quality.
          </>
        }
        servicePTwo={
          <>
            As a Audi owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of{" "}
            <span className="vehicle-span-special">Audi vehicles</span> in the
            area. From the moment you walk through our door until you leave
            satisfied with the results, our team strives to supply only the best
            service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default AudiPath;
