import axiosIns from "./axiosInstance";

const penangananApi = {
  getSingle: (id) => axiosIns.get(`/admin/pengaduan-single/${id}`),
  add: (data) => axiosIns.post("/admin/penanganan", data),
  getAll: () => axiosIns.get("/public/penanganan"),
};

export default penangananApi;
