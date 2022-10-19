import React from "react";
import { Navigate } from "../../node_modules/react-router-dom/dist/index";
import { isLogin } from "../utils/is_login";

const PrivateRoute = ({ children }) => {
  if (isLogin()) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
