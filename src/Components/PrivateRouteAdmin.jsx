import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Outlet } from "react-router-dom";

const PrivateRouteAdmin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const redirect = useNavigate();

  useEffect(function () {
    axios
      .get("http://localhost:8080/users/islogin")
      .then(({ data }) => {
        const isAdmin = data.data[0].role;
        if (isAdmin != "Admin") {
          redirect("/dashboard");
        }
        setIsLogin(true);
      })
      .catch((err) => {
        redirect("/login");
      });
  }, []);

  return isLogin ? <Outlet /> : "";
};

export default PrivateRouteAdmin;
