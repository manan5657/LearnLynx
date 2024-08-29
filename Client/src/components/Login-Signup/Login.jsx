import { useState } from "react";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate=useNavigate();
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSignUpchange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error("Password And Confirm Password Not Matched");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: signUpData.username,
          email: signUpData.email,
          password: signUpData.password,
        }),
      });

      const result = await response.json();

      if (result.statusCode == 400) {
        const message = result.message;
        console.log(message);
        toast.error(message);
      } else {
        toast.success("User Registered Succesfully");
        setSignUpData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error("Network error:", error);
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (result.statusCode == 400) {
        const message = result.message;
        console.log(message);
        toast.error(message);
      } else {
        toast.success("Welcome To LearnLynx");
        setLoginData({
          email:'',
          password:''
        })
        window.h
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <>
      <div className="loginSignupMain">
        <input type="checkbox" id="loginSignupChk" aria-hidden="true" />

        <div className="loginSignupSignup">
          <form onSubmit={handleSignupSubmit}>
            <label htmlFor="loginSignupChk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="username"
              placeholder="User name"
              required=""
              className="loginSignupInput"
              value={signUpData.username}
              onChange={handleSignUpchange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              className="loginSignupInput"
              value={signUpData.email}
              onChange={handleSignUpchange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="loginSignupInput"
              value={signUpData.password}
              onChange={handleSignUpchange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required=""
              className="loginSignupInput"
              value={signUpData.confirmPassword}
              onChange={handleSignUpchange}
            />
            <button className="loginSignupButton signupbutton" type="submit">
              Sign up
            </button>
          </form>
        </div>

        <div className="loginSignupLogin">
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="loginSignupChk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              className="loginSignupInput"
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="loginSignupInput"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button className="loginSignupButton" type="submit">Login</button>
          </form>
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
