import "./Services.css";

const Services = (props) => {
  return (
    <div>
      <div className="services-container">
        <img src={props.img} className="services-img" />
        <h3 className="services-header">{props.header}</h3>
        <p className="services-info">{props.info}</p>
      </div>
    </div>
  );
};

export default Services;
