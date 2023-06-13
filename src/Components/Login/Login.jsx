import IconProfile from "./IconProfile";
import FormLogin from "./FormLogin";
import { useEffect, useState } from "react";
import auth from "../../api/auth";
import { useNavigate } from "react-router-dom";

const login = () => {
  const redirect = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(function () {
    document.title = "Login";

    auth
      .isLogin()
      .then(({ data }) => {
        if (data.data[0].role === "Admin") {
          redirect("/admin");
          return;
        }else if(data.data[0].role === "User"){
          redirect("/dashboard");
          return;
        }
      })
      .catch((err) => setIsLogin(false));
  }, []);
  return isLogin ? (
    ""
  ) : (
    <section className="bg-green-400 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <IconProfile />
        <div className="border-2 border-white w-full bg-slate-300  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-8 space-y-4 md:space-y-6 sm:p-8">
            <FormLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
