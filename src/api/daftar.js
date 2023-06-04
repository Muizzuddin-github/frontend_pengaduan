import axios from "axios";

const daftar = {
    daftar: async (data) => {
        return await axios.post("http://localhost:8080/user", data)
    }
}
export default daftar