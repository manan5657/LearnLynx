import './ViewCourse.css'
import { useState ,useEffect} from 'react'; 
import {useParams} from 'react-router-dom'

export default function ViewCourse() {
  const {id}=useParams();
  const [Course,setCourse]=useState({});
  console.log(id);
  useEffect(() => {
    fetch(`/api/admin/course/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        return response.json();
      })
      .then(data => setCourse(data))
      .catch(error => setError(error.message));
  }, []);
  console.log(Course);

  return (
    <>
    <div className="view-course">
    <div className="custom-class-2"> 
    <div class="potential">Unlock the Full Potential of
    <i><div class="learnlynx">LearnLynx!</div></i>
    </div>
   
      <div className="custom-class">
        <img
          src={Course.img}
          alt="Course Image"
        />
        <div className="content">
          <h3>{Course.title}</h3>
          <h3>{Course.discountPrice}</h3>
          <button>
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
