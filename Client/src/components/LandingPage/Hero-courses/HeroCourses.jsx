import Card from "../../utils/Cards/LandingPageCards/Card.jsx";
import "./HeroCourses.css";
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
  return (
    <>
      <div className="page3">
        <p className="popular">
          Popular <span className="courses">Courses</span>
        </p>
        <div className="container2">
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
      </div>
    </>
  );
}
