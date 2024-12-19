import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/lotie/login.json";
import Lottie from "lottie-react";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";
const Login = () => {
  const { signin, setUser, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("locationin login page", location);
  const from = location.state || "/";
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    signin(email, password)
      .then((data) => {
        const value = data.user;
        setUser(value);
        <Navigate to={"/home"}></Navigate>;
        console.log(data.user.email);
        const user = { email };
        axios
          .post("http://localhost:9000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <div className="flex items-center min-h-screen dark:bg-slate-900 flex-wrap-reverse justify-around pt-2 sm:pt-4  bg-gray-100">
        <div className="w-full max-w-md p-6  bg-white  dark:bg-slate-800 dark:text-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center dark:text-white text-gray-800 mb-4">
            Login
          </h2>
          <form onSubmit={handelLogin}>
            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Forget Password */}
            <div className="text-right mb-4">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forget Password?
              </Link>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg focus:outline-none
          "
            >
              Login
            </button>
          </form>
          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full px-4 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none"
          >
            <div
              //     onClick={handelGoogle}
              className="flex items-center gap-2 justify-center"
            >
              <img
                className="w-6"
                src="https://i.ibb.co/mSSztJP/google-logo-9808.png"
                alt=""
              />
              <p className="dark:text-blue-500">Google Login</p>
            </div>
          </button>
          {/* Link to Register Page */}
          <p className="mt-4 text-sm text-center dark:text-white text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
        <Lottie className="w-96" animationData={loginAnimation}></Lottie>
      </div>
    </>
  );
};

export default Login;
