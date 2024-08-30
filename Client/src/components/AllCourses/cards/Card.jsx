
import './Card.css';
import { useNavigate } from 'react-router-dom';
const Card = ({ title,image,price,discount_price,id }) => {
  const navigate=useNavigate();
  const handleId = ()=>{
    navigate(`/Course/${id}`);
  }

    return (
      <div className="course-card">
        <div className="course-image">
          <img src={image} alt={`${title} Course`} />
        </div>
          <h3>{title}</h3>
          <div className="course-info">
          <div className="course-meta">
            <span>By: Love</span>
          </div>
          <div class="price">
          <span class="price1"> ₹ {price}</span> 
          <span > ₹ {discount_price}</span>
          </div>
          <button className="view-courses"onClick={handleId}>View Course</button>
        </div>
      </div>
    );
  };
  
  export default Card;