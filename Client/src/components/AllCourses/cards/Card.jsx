
import './Card.css';
const Card = ({ title,image }) => {
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
            
          <button className="view-courses">View Course</button>
        </div>
      </div>
    );
  };
  
  export default Card;