import axiosIns from "./axiosInstance";

const pengaduanApi = {

  getAllByStatus : (status,token) => axiosIns.get(`http://localhost:8080/admin/pengaduan/${status}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
};

export default pengaduanApi;
