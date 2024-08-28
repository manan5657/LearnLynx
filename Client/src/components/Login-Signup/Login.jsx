import { useState } from "react";
import "./Login.css";

export default function Login() {
  // const [isLogin, setIsLogin] = useState(true);

  // const showLogin = () => {
  //   setIsLogin(true);
  // };

  // const showRegister = () => {
  //   setIsLogin(false);
  // };

  return (
    <div className="loginSignupMain">
      <input type="checkbox" id="loginSignupChk" aria-hidden="true" />

      <div className="loginSignupSignup">
        <form>
          <label htmlFor="loginSignupChk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            name="txt"
            placeholder="User name"
            required=""
            className="loginSignupInput"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            className="loginSignupInput"
          />
          <input
            type="password"
            name="broj"
            placeholder="Password"
            required=""
            className="loginSignupInput"
          />
          <input
            type="password"
            name="pswd"
            placeholder="Confirm Password"
            required=""
            className="loginSignupInput"
          />
          <button className="loginSignupButton signupbutton">Sign up</button>
        </form>
      </div>

      <div className="loginSignupLogin">
        <form>
          <label htmlFor="loginSignupChk" aria-hidden="true">
            Login
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            className="loginSignupInput"
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            className="loginSignupInput"
          />
          <button className="loginSignupButton">Login</button>
        </form>
      </div>
    </div>
  );
}
