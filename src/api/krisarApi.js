import axios from "axios";

const krisarApi = {
  async getAll(token) {
    return await axios.get("http://localhost:8080/admin/krisar", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default krisarApi;
