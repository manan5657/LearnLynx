import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ title, image, price, discount_price, id ,owner}) => {
  const navigate = useNavigate();
  const handleId = () => {
    window.scrollTo(0,0)
    navigate(`/Course/${id}`);
  };

  return (
    <div className="course-card">
      <div className="course-image">
        <img src={image} alt={`${title} Course`} />
      </div>
      <h3>{title}</h3>
      <div className="course-info-card">
        <div className="course-meta">
          <span>By: {owner} </span>
        </div>
        <div className="price">
          <span className="price1"> ₹ {price}</span>
          <span> ₹ {discount_price}</span>
        </div>
        <button className="view-courses" onClick={handleId}>
          View Course
        </button>
      </div>
    </div>
  );
};

export default Card;
