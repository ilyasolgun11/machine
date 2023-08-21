import React from "react";

const ServicesItems = (props) => {
  return (
    <div className="services-item-container">
      <img src={props.img} className="services-path-img" />
      <h3 className="services-path-name">{props.name}</h3>
    </div>
  );
};

export default ServicesItems;
