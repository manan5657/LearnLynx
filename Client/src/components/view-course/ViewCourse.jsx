import "./ViewCourse.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/admin/course/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        return response.json();
      })
      .then((data) => setCourse(data))
      .catch((error) => setError(error.message));
  }, [id]);

  return (
    <>
      <div className="course-header">
        <div className="course-info">
          <h1>{course.title}</h1>
          <p className="course-description">
            Unlock the Full Potential of{" "}
            <em style={{ color: "#f9c365" }}>LearnLynx!</em>
          </p>
        </div>
        <div className="course-card-container">
          <div className="course-card">
            <img className="course-card-img" src={course.img} alt="Course" />
            <div className="course-card-content">
              <h3>{course.title}</h3>
              <p className="course-price">₹ {course.price}</p>
              <p className="course-price discount-price">
                ₹ {course.discountPrice}
              </p>
              <button className="enroll-btn">Enroll Now!</button>
            </div>
          </div>
        </div>
      </div>

      <div className="course-details">
        <div className="course-extra-info">
          <div className="info-section">
            <h2>Course Syllabus</h2>
            <ul>
              <li>Introduction to the Course</li>
              <li>Basics of the Subject</li>
              <li>Advanced Concepts</li>
              <li>Practical Exercises</li>
              <li>Final Project</li>
            </ul>
          </div>
          <div className="info-section">
            <h2>Instructor Information</h2>
            <p>Instructor Name: John Doe</p>
            <p>Experience: 10 years in the industry</p>
            <p>
              Bio: John Doe has been teaching for over a decade with a focus on
              practical skills and real-world applications.
            </p>
          </div>
          <div className="info-section">
            <h2>Course Reviews</h2>
            <p>
              "An excellent course with detailed explanations and practical
              exercises!" - Jane Smith
            </p>
            <p>"Great value for money. Highly recommend!" - Mark Johnson</p>
          </div>
          <div className="info-section">
            <h2>Related Courses</h2>
            <ul>
              <li>Advanced Topics in the Subject</li>
              <li>Introduction to a Related Field</li>
              <li>Specialization Course</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
