import { useState } from "react";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
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
  const handleSignUpChange = (e) => {
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
      const response = await axios.post("http://localhost:3000/api/signup", {
        username: signUpData.username,
        email: signUpData.email,
        password: signUpData.password,
      });

      if (response.data.statusCode === 400) {
        const message = response.data.message;
        console.log(message);
        toast.error(message);
      } else {
        toast.success("User Registered Successfully");
        setSignUpData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error(`Network error: ${error.message}`);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        { withCredentials: true } // Ensure cookies are included
      );
      const teacher = response.data.user.teacher;
      console.log(teacher);

      if (response.data.statusCode === 400) {
        const message = response.data.message;
        console.log(message);
        toast.error(message);
      } else {
        toast.success("Welcome To LearnLynx");
        if (teacher) {
          window.location.href = `http://localhost:5173/admin/dashboard/`;
        }
        setLoginData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000); // Adjust the delay to match the autoClose time of the toast notification
      }
    } catch (error) {
      console.error(`Network error: ${error.message}`);
      toast.error(`Network error: ${error.message}`);
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
              required
              className="loginSignupInput"
              value={signUpData.username}
              onChange={handleSignUpChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="loginSignupInput"
              value={signUpData.email}
              onChange={handleSignUpChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="loginSignupInput"
              value={signUpData.password}
              onChange={handleSignUpChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className="loginSignupInput"
              value={signUpData.confirmPassword}
              onChange={handleSignUpChange}
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
              required
              className="loginSignupInput"
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="loginSignupInput"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <button className="loginSignupButton" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000} // Close after 3 seconds
        hideProgressBar={false}
      />
    </>
  );
}
