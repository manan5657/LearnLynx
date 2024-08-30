import Layout from "./layout.jsx";
import Landingpage from "./components/LandingPage/Landingpage.jsx";
import Login from "./components/Login-Signup/Login.jsx";
import Courses from './components/AllCourses/AllCourses.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/all-courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login/>} />
          <Route path="/Course/:id" element={<div>Course</div>} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
