import CourseCard from '../cards/Card';
import '../AllCourses.css';
import './Courses.css';
import image1 from '../../../assets/course_card_1.png';
import image2 from '../../../assets/course_card_1.png';

const App = () => {
  return (
    <div className="App">
      <div className="course-grid">
        <CourseCard
          title="Web Programming"
          image={image1}
          
          teacher="kashi"
        />
        <CourseCard
          title="Java Development"
          image={image2} 
        teacher="Love"
        />
                <CourseCard
          title="Java Development"
          image={image2} 
        teacher="Love"
        />
                <CourseCard
          title="Java Development"
          image={image2} 
        teacher="Love"
        />
                <CourseCard
          title="Java Development"
          image={image2} 
        teacher="Love"
        />
      </div>
    </div>
  );
};

export default App;