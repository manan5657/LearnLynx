import "./Header.css"
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

  return (
    <>
      <div className="header">
        <div>
          <nav>
            <NavLink className="navlink" to="/" >
              Home
            </NavLink>
            <NavLink className="navlink" to="/blog" >
              Blog
            </NavLink>
            <NavLink className="navlink" to="/course" >
              Courses
            </NavLink>
          </nav>
        </div>
        <div className="image">
            <Link to="/"><img className="imageshown" src={Logo} alt="project photo" /></Link>
        </div>
        <div className="authentication">
          <Link className="link login" to="/login">
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
    </>
  );
}

export default Header;
