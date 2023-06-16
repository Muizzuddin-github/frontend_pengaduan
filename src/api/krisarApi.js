import axiosIns from "./axiosInstance";

const krisarApi = {
  getAll: () => axiosIns.get("/admin/krisar"),
  getAllByUser: () => axiosIns.get("/user/krisar"),
  del: (id) => axiosIns.delete(`/user/krisar/${id}`),
  add: (data) => axiosIns.post("/user/krisar/", data),
};

export default krisarApi;
