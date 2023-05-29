import axios from "axios";

const katPengaduanApi = {
  async getAll(token) {
    return await axios.get("http://localhost:8080/users/kategori-pengaduan", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  async add(data, token) {
    return await axios.post(
      "http://localhost:8080/admin/kategori-pengaduan",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  async edit(id, data, token) {
    return await axios.put(
      `http://localhost:8080/admin/kategori-pengaduan/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};

export default katPengaduanApi;
