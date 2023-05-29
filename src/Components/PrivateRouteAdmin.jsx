import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../api/auth";
import { RootContext } from "./GlobalState";

const PrivateRouteAdmin = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const redirect = useNavigate();

  const { setToken } = useContext(RootContext);

  useEffect(function () {
    auth
      .getToken()
      .then(({ data }) => {
        const isAdmin = data.data[0].role;
        if (isAdmin !== "Admin") {
          redirect("/dashboard");
        } else {
          setToken(data.accessToken);
          setIsLogin(true);
        }
      })
      .catch((err) => redirect("/login"));
  }, []);

  return isLogin ? children : "";
};

export default PrivateRouteAdmin;
