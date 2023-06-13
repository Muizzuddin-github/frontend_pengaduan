import axiosIns from "./axiosInstance";

const penangananApi = {

  getSingle : (id,token) => axiosIns.get(
    `/admin/pengaduan-single/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
};

export default penangananApi;
