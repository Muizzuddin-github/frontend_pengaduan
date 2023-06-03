import axios from "axios";

const penangananApi = {
  async getSingle(id, token) {
    return await axios.get(
      `http://localhost:8080/admin/pengaduan-single/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};

export default penangananApi;
