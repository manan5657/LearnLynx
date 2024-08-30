import Layout from "./layout.jsx";
import Landingpage from "./components/LandingPage/Landingpage.jsx";
import Login from "./components/Login-Signup/Login.jsx";
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
          {/* <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/course" element={<div>Course</div>} /> */}
          <Route path="/login" element={<Login />} />
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
