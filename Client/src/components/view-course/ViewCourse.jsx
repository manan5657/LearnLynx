import "./ViewCourse.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import logo from '../../assets/logo-learnlynx.png';

export default function ViewCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [error, setError] = useState(null);

  const checkOutHandler = async (ammount) => {
    try {
      const {
        data: { order },
      } = await axios.post("http://localhost:3000/api/checkout", {
        ammount,
      });
      const {
        data: { key },
      } = await axios.get("http://localhost:3000/api/getkey");

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "LearnLynx",
        description: "Testing Razorpay",
        image: `${logo}`,
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:3000/api/paymentverification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#f9c365",
        },
      };
      console.log(window);
      console.log(options);
      var rzp1 = window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.log(err);
    }
  };

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
              <button className="enroll-btn" onClick={()=>{checkOutHandler(course.discountPrice)}}>Enroll Now!</button>
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
