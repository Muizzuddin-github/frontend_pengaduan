import axios from "axios";

const pengaduanApi = {
  async getAllByStatus(status, token) {
    return await axios.get(`http://localhost:8080/admin/pengaduan/${status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default pengaduanApi;
