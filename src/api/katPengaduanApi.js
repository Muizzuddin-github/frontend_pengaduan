import axiosIns from "./axiosInstance";

const katPengaduanApi = {
  getAll: () => axiosIns.get("/users/kategori-pengaduan"),
  add: (data) => axiosIns.post("/admin/kategori-pengaduan", data),
  edit: (id, data) => axiosIns.put(`/admin/kategori-pengaduan/${id}`, data),
  del: (id) =>
    axiosIns.delete(`http://localhost:8080/admin/kategori-pengaduan/${id}`),
};

export default katPengaduanApi;
