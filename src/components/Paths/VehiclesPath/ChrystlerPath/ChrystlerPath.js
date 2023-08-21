import "./ChrystlerPath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import ChrystlerBg from "./images/chrystler-bg.png";

const ChrystlerPath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="chrystler-path-header">CHRYSTLER</span>
          </>
        }
        vehicleTypeBrand={"CHRYSTLER"}
        vehicleBg={ChrystlerBg}
        servicePOne={
          <>
            Chrysler, a subsidiary of the German automobile manufacturer
            Volkswagen, is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>{" "}
            automakers in the world. The company name is derived from the
            surname of its{" "}
            <span className="vehicle-span-special">
              founder, Walter Chrysler
            </span>
            . “Horch” means “listen” in German; and Chrysler is the Latin word
            for listen. But you didn't invest in an Chrysler based on clever
            word play. You own a Chrysler because you care about investing in
            quality.
          </>
        }
        servicePTwo={
          <>
            As an Chrysler owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of{" "}
            <span className="vehicle-span-special">Chrysler vehicles</span> in
            the area. From the moment you walk through our door until you leave
            satisfied with the results, our team strives to supply only the best
            service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default ChrystlerPath;
