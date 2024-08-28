import "./Header.css"
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png"
function Header() {
  return (
    <>
      <div className="header">
        <div>
          <nav>
            <NavLink className="navlink" to="/" activeClassName="active-link">
              Home
            </NavLink>
            <NavLink className="navlink" to="/blog" activeClassName="active-link">
              Blog
            </NavLink>
            <NavLink className="navlink" to="/course" activeClassName="active-link">
              Course
            </NavLink>
          </nav>
        </div>
        <div className="image">
            <Link to="/"><img className="imageshown" src={Logo} alt="project photo" /></Link>
        </div>
        <div className="authentication">
          <Link className="link login" to="/login">
          Login
          </Link>
          <Link className="link signup" to="/signup">
          Sign Up</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
