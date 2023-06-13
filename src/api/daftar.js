import axiosIns from "./axiosInstance"

const daftar = {
    daftar: (data) => axiosIns.post("/user", data)
}
export default daftar