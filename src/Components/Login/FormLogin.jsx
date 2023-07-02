import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../api/auth";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = useNavigate();

  const handleClick = async (e) => {
    try {
      e.preventDefault();

      const { data } = await auth.login({
        email,
        password,
      });
      redirect(data.redirectURL);
      alert(`Berhasil Login ${email} ${password}`);
    } catch (err) {
      if (err.response.status === 404) {
        alert(err.response.data.errors.join(" "));
      } else {
        console.log(err);
      }
    }
  };
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleClick}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email Anda
        </label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Masukan Email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Lupa password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign in
      </button>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Belum Punya Akun?{" "}
        <Link
          to="/daftar"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Daftar
        </Link>
      </p>
    </form>
  );
};
export default FormLogin;
