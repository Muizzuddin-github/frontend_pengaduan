import axiosIns from "./axiosInstance";

const auth = {
  login: (data) => axiosIns.post("/users/login", data),
  daftar: (data) => axiosIns.post("/users/register", data),
  logout: () => axiosIns.post("/users/logout"),
  isLogin: () => axiosIns.get("/users/islogin"),
};

export default auth;
