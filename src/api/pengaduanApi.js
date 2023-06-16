import axiosIns from "./axiosInstance";

const pengaduanApi = {
  getAllByStatus: (status) => axiosIns.get(`/admin/pengaduan/${status}`),
  changeStatus: (id) =>
    axiosIns.patch(`/admin/pengaduan/${id}`, {
      status: "diproses",
    }),
};

export default pengaduanApi;
