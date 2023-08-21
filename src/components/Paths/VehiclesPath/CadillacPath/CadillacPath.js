import "./CadillacPath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import CadillacBg from "./images//cadillac-bg.png";

const CadillacPath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="cadillac-path-header">CADILLAC</span>
          </>
        }
        vehicleTypeBrand={"CADILLAC"}
        vehicleBg={CadillacBg}
        servicePOne={
          <>
            Cadillac, a subsidiary of the German automobile manufacturer
            Volkswagen, is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>top
            three luxury automakers in the world. The company name is derived
            from the surname of its{" "}
            <span className="vehicle-span-special">
              founder, William Murphy
            </span>
            . “Horch” means “listen” in German; and Cadillac is the Latin word
            for listen. But you didn't invest in an Cadillac based on clever
            word play. You own an Cadillac because you care about investing in
            quality.
          </>
        }
        servicePTwo={
          <>
            As an Cadillac owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of{" "}
            <span className="vehicle-span-special">Cadillac vehicles</span> in
            the area. From the moment you walk through our door until you leave
            satisfied with the results, our team strives to supply only the best
            service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default CadillacPath;
