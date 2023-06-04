import axios from "axios";

const auth = {
  login: async (data) =>
    await axios.post("http://localhost:8080/users/login", data),
  isLogin: async () => await axios.get("http://localhost:8080/users/islogin"),
  getToken: async () =>
    await axios.get("http://localhost:8080/users/refresh-access-token"),
  logout: async () => await axios.put("http://localhost:8080/users/logout"),
};

export default auth;
