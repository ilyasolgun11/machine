import "./ReviewsItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewsItem = (props) => {
  return (
    <div className="reviews-item-container">
      <div className="quote-container">
        <FontAwesomeIcon
          className="quote-symbol"
          icon={faQuoteRight}
          style={{ color: "#fd000d" }}
        />
        <p className="reviews-item-quote">"{props.text}"</p>
      </div>
      <div className="reviews-item-name-container">
        <h3 className="reviews-item-name">{props.name}</h3>
        <FontAwesomeIcon
          className="reviews-item-star"
          icon={faStar}
          style={{ color: "#fd000d" }}
        />
        <FontAwesomeIcon
          className="reviews-item-star"
          icon={faStar}
          style={{ color: "#fd000d" }}
        />
        <FontAwesomeIcon
          className="reviews-item-star"
          icon={faStar}
          style={{ color: "#fd000d" }}
        />
        <FontAwesomeIcon
          className="reviews-item-star"
          icon={faStar}
          style={{ color: "#fd000d" }}
        />
        <FontAwesomeIcon
          className="reviews-item-star"
          icon={faStar}
          style={{ color: "#fd000d" }}
        />
      </div>
    </div>
  );
};

export default ReviewsItem;
