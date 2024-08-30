import "./Header.css"
<<<<<<< HEAD
import { Link, NavLink ,useNavigate} from "react-router-dom";
import Logo from "../../assets/Logo.png"
import { useState,useEffect, } from "react";
import { toast, ToastContainer } from "react-toastify";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return null; 
};

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
   const checkAuth=()=>{
    const token = getCookie('token'); 
    if (token) {
      setIsLoggedIn(true);
    }
  }
  checkAuth();} ,[]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'GET',
        credentials: 'include', // Important for sending cookies
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Successfully logged out');
        setIsLoggedIn(false);
        navigate('/login'); // Redirect to login page
      } else {
        toast.error(data.message || 'Logout failed');
      }
    } catch (error) {
      toast.error('An error occurred');
      console.error('Logout error:', error);
    }
  };

=======
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png"
function Header() {
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
  return (
    <>
      <div className="header">
        <div>
          <nav>
<<<<<<< HEAD
            <NavLink className="navlink" to="/" >
              Home
            </NavLink>
            <NavLink className="navlink" to="/blog" >
              Blog
            </NavLink>
            <NavLink className="navlink" to="/course" >
              Courses
=======
            <NavLink className="navlink" to="/" activeClassName="active-link">
              Home
            </NavLink>
            <NavLink className="navlink" to="/blog" activeClassName="active-link">
              Blog
            </NavLink>
            <NavLink className="navlink" to="/course" activeClassName="active-link">
              Course
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
            </NavLink>
          </nav>
        </div>
        <div className="image">
            <Link to="/"><img className="imageshown" src={Logo} alt="project photo" /></Link>
        </div>
        <div className="authentication">
          <Link className="link login" to="/login">
<<<<<<< HEAD
          Teach on LearnLynx
          </Link>
          {isLoggedIn?(<Link className="link login" to="/login"onClick={handleLogout}>Logout</Link>):(<Link className="link signup" to="/login">Login</Link>)}
          
          
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000} // Close after 3 seconds
        hideProgressBar={false}
      />
=======
          Login
          </Link>
          <Link className="link signup" to="/signup">
          Sign Up</Link>
        </div>
      </div>
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
    </>
  );
}

export default Header;
