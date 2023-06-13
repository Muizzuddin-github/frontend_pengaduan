import axiosIns from "./axiosInstance";

const krisarApi = {

  getAll : (token) => axiosIns.get("/admin/krisar", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),

  getAllByUser : (token) => axiosIns.get("/user/krisar", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),

  del : (id,token) => axiosIns.delete(`/user/krisar/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),

  add : (token,data) => axiosIns.post("/user/krisar/", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
};

export default krisarApi;
