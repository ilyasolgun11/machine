import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewStars = () => {
  return (
    <div>
      <FontAwesomeIcon
        className="review-star-style"
        icon={faStar}
        style={{ color: "#ff212c" }}
      />
      <FontAwesomeIcon
        className="review-star-style"
        icon={faStar}
        style={{ color: "#ff212c" }}
      />
      <FontAwesomeIcon
        className="review-star-style"
        icon={faStar}
        style={{ color: "#ff212c" }}
      />
      <FontAwesomeIcon
        className="review-star-style"
        icon={faStar}
        style={{ color: "#ff212c" }}
      />
      <FontAwesomeIcon
        className="review-star-style"
        icon={faStar}
        style={{ color: "#ff212c" }}
      />
    </div>
  );
};

export default ReviewStars;
