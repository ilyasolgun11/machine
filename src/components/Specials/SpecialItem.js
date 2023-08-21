import "./SpecialItem.css";

const SpecialItem = (props) => {
  const currentDate = new Date();

  const threeDaysFromNow = new Date();
  threeDaysFromNow.setDate(currentDate.getDate() + Math.random() * 7);

  const formattedDate = `${threeDaysFromNow.getDate()}/${
    threeDaysFromNow.getMonth() + 1
  }/${threeDaysFromNow.getFullYear()}`;

  return (
    <div>
      <div className="special-item__container">
        <h4 className="special-item-date">EXP {formattedDate}</h4>
        <h3 className="special-item-name-1">{props.specialName1}</h3>
        <h3 className="special-item-name-2">{props.specialName2}</h3>
        <h3 className="special-item-price">€{props.price}</h3>
        <img src={props.img} className="special-item-img" />
      </div>
    </div>
  );
};

export default SpecialItem;
