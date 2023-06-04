import axios from "axios";

const krisarApi = {
  async getAll(token) {
    return await axios.get("http://localhost:8080/admin/krisar", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  async getAllByUser(token) {
    return await axios.get("http://localhost:8080/user/krisar", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  async del(id, token) {
    return await axios.delete(`http://localhost:8080/user/krisar/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  async add(token, data) {
    return await axios.post("http://localhost:8080/user/krisar/", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default krisarApi;
