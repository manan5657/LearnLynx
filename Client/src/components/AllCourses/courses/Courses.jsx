import CourseCard from "../cards/Card";
import "../AllCourses.css";
import "./Courses.css";
import { useState, useEffect } from "react";
// import {useNavigate} from 'react-router-dom'

const App = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/api/admin/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        return response.json();
      })
      .then((data) => setCourses(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            title={course.title}
            image={course.img}
            discount_price={course.discountPrice}
            price={course.price}
            id={course._id}
            owner={course.owner.username}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
