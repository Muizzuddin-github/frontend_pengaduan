import axiosIns from "./axiosInstance";

const katPengaduanApi = {

  getAll : (token) => axiosIns.get("/users/kategori-pengaduan", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),

  add : (data,token) => axiosIns.post(
    "/admin/kategori-pengaduan",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ),

  edit : (id,data,token) => axiosIns.put(
    `/admin/kategori-pengaduan/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
};

export default katPengaduanApi;
