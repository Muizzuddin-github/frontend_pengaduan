import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PrivateRouteAdmin = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const redirect = useNavigate();

  useEffect(function () {
    axios.get("http://localhost:8080/users/islogin").then(({ data }) => {
      const isAdmin = data.data[0].role;
      if (isAdmin !== "Admin") {
        redirect("/login");
      } else {
        setIsLogin(true);
      }
    });
  }, []);

  return isLogin ? children : "";
};

export default PrivateRouteAdmin;
