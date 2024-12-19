import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import register from "../../assets/lotie/register.json";
import Lottie from "lottie-react";

import AuthContext from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { newUser, setUser, setLoader, googleLogIn } = useContext(AuthContext);
  const handelGoogle = () => {
    //     console.log(googleLogin);
    googleLogIn()
      .then((result) => {
        setUser(result.user);
        alert("successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const myUser = { name, email, photoURL, password };
    console.log(myUser);
    newUser(email, password)
      .then((data) => {
        const value = data.user;
        //   setLoader(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "register successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        setUser(value);
        console.log(value);
        const user = { email: email };
        axios.post("http://localhost:9000/jwt", user).then((data) => {
          console.log(data);
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: true,
        });
      });
  };

  return (
    <>
      <div className="flex items-center pb-4  justify-around flex-wrap-reverse pt-2 sm:pt-4 dark:bg-slate-900 bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white dark:bg-slate-800 dark:text-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center dark:text-white text-gray-800 mb-4">
            Register
          </h2>
          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>
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
            {/* Photo URL */}
            <div className="mb-4">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-600"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter photo URL"
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
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 btn py-2 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg focus:outline-none"
            >
              Submit
            </button>
          </form>
          {/* Google Login Button */}
          <button className="w-full btn px-4 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none">
            <div
              onClick={handelGoogle}
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
          {/* Link to Login Page */}
          <p className="mt-4 text-sm text-center dark:text-white text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
        <Lottie className="w-80" animationData={register}></Lottie>
      </div>
    </>
  );
};

export default Register;
