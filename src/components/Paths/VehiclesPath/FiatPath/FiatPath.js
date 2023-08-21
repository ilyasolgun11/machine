import "./FiatPath.css";
import VehiclePage from "../VehiclePage/VehiclePage";
import FiatImg from "./images/fiat-car.png";

const FiatPath = () => {
  return (
    <div>
      <VehiclePage
        vehicleBrand={
          <>
            <span className="bmw-path-header">FIAT</span>
          </>
        }
        vehicleTypeBrand={"FIAT"}
        vehicleBg={FiatImg}
        servicePOne={
          <>
            Fiat, a subsidiary of the German automobile manufacturer Volkswagen,
            is one of the{" "}
            <span className="vehicle-span-special">top three luxury</span>{" "}
            automakers in the world. The company name is derived from the
            surname of its founder, Giovanni Agnelli. “Horch” means “listen” in
            German; and Fiat is the Latin word for listen. But you didn’t invest
            in a Fiat based on clever word play. You own a Fiat because you care
            about investing in quality.
          </>
        }
        servicePTwo={
          <>
            As an Fiat owner, you understand that a quality vehicle demands
            quality service. Our shop offers the highest quality service and
            repair of{" "}
            <span className="vehicle-span-special">Fiat vehicles</span> in the
            area. From the moment you walk through our door until you leave
            satisfied with the results, our team strives to supply only the best
            service to both you and your vehicle.
          </>
        }
      />
    </div>
  );
};

export default FiatPath;
