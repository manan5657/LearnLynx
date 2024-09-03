import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({
  title,
  image,
  price,
  discount_price,
  id,
  owner,
  isEnrolled,
}) => {
  const navigate = useNavigate();

  const handleId = () => {
    if (!isEnrolled) {
      window.scrollTo(0, 0);
      navigate(`/Course/${id}`);
    }
  };

  return (
    <div className={`course-card ${isEnrolled ? "enrolled-card" : ""}`}>
      <div className="course-image">
        <img src={image} alt={`${title} Course`} />
        {isEnrolled && (
          <div className="locked-overlay">
            <span>Enrolled</span>
          </div>
        )}
      </div>
      <h3>{title}</h3>
      <div className="course-info-card">
        <div className="course-meta">
          <span>By: {owner}</span>
        </div>
        <div className="price">
          <span className="price1">₹ {price}</span>
          <span>₹ {discount_price}</span>
        </div>
        <button
          className={`view-courses ${isEnrolled ? "locked-button" : ""}`}
          onClick={handleId}
        >
          {isEnrolled ? "Access Course" : "View Course"}
        </button>
      </div>
    </div>
  );
};

export default Card;

// import "./Card.css";
// import { useNavigate } from "react-router-dom";
// const Card = ({
//   title,
//   image,
//   price,
//   discount_price,
//   id,
//   owner,
//   isEnrolled,
// }) => {
//   const navigate = useNavigate();
//   const handleId = () => {
//     window.scrollTo(0, 0);
//     navigate(`/Course/${id}`);
//   };
//   console.log(isEnrolled);
//   return (
//     <div className="course-card">
//       <div className="course-image">
//         <img src={image} alt={`${title} Course`} />
//       </div>
//       <h3>{title}</h3>
//       <div className="course-info-card">
//         <div className="course-meta">
//           <span>By: {owner} </span>
//         </div>
//         <div className="price">
//           <span className="price1"> ₹ {price}</span>
//           <span> ₹ {discount_price}</span>
//         </div>
//         <button className="view-courses" onClick={handleId}>
//           View Course
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
