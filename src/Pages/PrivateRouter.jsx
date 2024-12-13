import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { div } from "motion/react-client";
import Loader from "./Loader";

const PrivateRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loader) {
    return <Loader></Loader>;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default PrivateRouter;
