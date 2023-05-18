import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const redirect = useNavigate();

  useEffect(function () {
    axios
      .get("http://localhost:8080/users/islogin")
      .then(({ data }) => {
        setIsLogin(true);
      })
      .catch((err) => {
        redirect("/login");
      });
  }, []);

  return isLogin ? children : "";
};

export default PrivateRoute;
