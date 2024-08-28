import Card from "../../utils/Cards/LandingPageCards/Card.jsx";
import "./HeroCourses.css";
import Course1 from "../../../assets/course_card_1.png";
import Course2 from "../../../assets/course_card_2.png";
import Course3 from "../../../assets/course_card_3.png";
export default function HeroCourses() {
  return (
    <>
      <div className="page3">
        <p className="popular">
          Popular <span className="courses">Courses</span>
        </p>
        <div className="container2">
          <Card title="Web" sale={50} image={Course1} price={200} dispr={400} />
          <Card title="C" sale={60} image={Course2} price={100} dispr={600} />
          <Card
            title="Java"
            sale={80}
            image={Course3}
            price={300}
            dispr={500}
          />
        </div>
        <button className="explore-btn">
          <p className="explore">
            Explore <span className="explore-arrow">→</span>
          </p>
        </button>
      </div>
    </>
  );
}
