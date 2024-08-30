import Card from "../../utils/Cards/LandingPageCards/Card.jsx";
import "./HeroCourses.css";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function HeroCourses() {
  const [courses,setCourses]=useState([]);

  useEffect(() => {
    fetch('/api/admin/courses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        return response.json();
      })
      .then(data => setCourses(data))
      .catch(error => setError(error.message));
  }, []);
=======
import Course1 from "../../../assets/course_card_1.png";
import Course2 from "../../../assets/course_card_2.png";
import Course3 from "../../../assets/course_card_3.png";
export default function HeroCourses() {
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
  return (
    <>
      <div className="page3">
        <p className="popular">
          Popular <span className="courses">Courses</span>
        </p>
        <div className="container2">
<<<<<<< HEAD
          {
            courses.slice(0,3).map(course=>(<Card title={course.title} image={course.img} dispr={course.discountPrice} price={course.price}/>))
          }
        </div>
        <Link to="/all-courses" className="explore-btn-link">
      <button className="explore-btn">
        <p className="explore">
          Explore <span className="explore-arrow">→</span>
        </p>
      </button>
    </Link>
=======
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
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
      </div>
    </>
  );
}
