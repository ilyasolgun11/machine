import "./VehicleTypes.css";

const VehicleTypes = (props) => {
  return (
    <div>
      <div className="vehicle-types-container">
        <img src={props.carBrandImg} className="vehicle-types-car-brand-img" />
        <h3 className="vehicle-types-car-brand">{props.carBrand}</h3>
        <p className="vehicle-types-car-p">{`Click to see more about ${props.carBrandP} services`}</p>
      </div>
    </div>
  );
};

export default VehicleTypes;
