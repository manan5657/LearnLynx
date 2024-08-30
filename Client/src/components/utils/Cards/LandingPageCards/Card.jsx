import "./Card.css";

<<<<<<< HEAD
export default function cards({ title,  image, price, dispr }) {
  return (
    <>
      <div className="card">
        <div className="ribbon-sale-card">Trending</div>
=======
export default function cards({ title, sale, image, price, dispr }) {
  return (
    <>
      <div className="card">
        <div className="ribbon-sale-card">{sale}% OFF</div>
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
        <img className="image-i" src={image} alt="course1" />
        <p className="page3-card-para">{title}</p>
        <em>
          <div className="description">Unlock Your Potential</div>
        </em>
        <em>
          <p className="disc-price-card">&#8377; {dispr}</p>
        </em>
        <p className="price-card">&#8377; {price}</p>
        <button className="page3-card-btn">
          <p className="page3-btn-para">View Course</p>
        </button>
      </div>
    </>
  );
}
