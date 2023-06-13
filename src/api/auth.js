import axiosIns from "./axiosInstance";

const auth = {
  login: (data) => axiosIns.post("/users/login", data),
  isLogin: () => axiosIns.get("/users/islogin"),
  getToken: () => axiosIns.get("/users/refresh-access-token"),
  logout: () => axiosIns.put("/users/logout"),
};

export default auth;
