import Navigasi from "./Components/Menu/Navigasi";
import { useState, useEffect } from "react";
import SinglePengaduan from "./Components/Penanganan/SinglePengaduan";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import penangananApi from "./api/penangananApi";
import auth from "./api/auth";

const Penanganan = () => {
  const [img, setImg] = useState(null);
  const [jenisPengaduan, setJenisPengaduan] = useState("selesai");
  const [imgUpload, setImgUpload] = useState(null);
  const [deskripsi, setDeskripsi] = useState("");
  const [errNotUploadImg, setErrNotUploadImg] = useState(false);
  const [token, setToken] = useState("");
  const redirect = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  // single pengaduan
  const [singlePengaduan, setSinglePengaduan] = useState({});
  const { id } = useParams();

  useEffect(function () {
    document.title = "Penanganan";
    auth
      .getToken()
      .then(({ data }) => {
        if (data.data[0].role !== "Admin") {
          redirect("/dashboard");
          return;
        }
        penangananApi
          .getSingle(id, data.accessToken)
          .then((res) => {
            setSinglePengaduan(res.data.data[0]);
            setToken(data.accessToken);
            setIsLogin(true);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        redirect("/login");
      });
  }, []);

  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setImgUpload(e.target.files[0]);
      setErrNotUploadImg(false);
    }
  };

  const handlePenanganan = async (e) => {
    const data = new FormData();
    data.append("foto_bukti", imgUpload);
    data.append("deskripsi", deskripsi);
    data.append("pengaduanID", +id);
    data.append("status", jenisPengaduan);
    try {
      e.preventDefault();
      if (!imgUpload) {
        setErrNotUploadImg(true);
        return;
      }

      console.log(token);

      await axios.post("http://localhost:8080/admin/penanganan", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("berhasil melakukan penanganan");
      redirect("/admin");
      e.target.reset();
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        try {
          const { data } = await axios.get(
            "http://localhost:8080/users/refresh-access-token"
          );

          await axios.post("http://localhost:8080/admin/penanganan", data, {
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          });

          alert("berhasil melakukan penanganan");
          redirect("/admin/pengaduan");
        } catch (err) {
          redirect("/login");
        }
      }
    }
  };

  return isLogin ? (
    <div>
      <Navigasi />

      <div className="py-10  flex justify-center">
        <SinglePengaduan singlePengaduan={singlePengaduan} />

        <div className="px-4 mx-2">
          <h1 className="font-bold">Tangani pengaduan</h1>

          <form
            className="border mt-4 p-2 shadow-sm"
            onSubmit={handlePenanganan}
          >
            {img ? (
              <img src={img} alt="" className="w-40 rounded-md mb-2" />
            ) : (
              ""
            )}
            <div className="py-2">
              <label
                htmlFor="img"
                className="cursor-pointer bg-blue-500 text-white py-1 px-4 rounded-sm text-sm"
              >
                upload foto
              </label>
              {errNotUploadImg ? (
                <p className="inline-block ml-2 text-sm text-red-600">
                  butuh gambar
                </p>
              ) : (
                ""
              )}
              <input
                type="file"
                id="img"
                className="hidden"
                onChange={handleUpload}
              />
            </div>
            <div className="my-1">
              <div className="text-sm">
                <label htmlFor="setuju">selesai</label>
                <input
                  type="radio"
                  id="setuju"
                  name="jenis-penanganan"
                  checked
                  className="ml-2"
                  onChange={() => setJenisPengaduan("selesai")}
                />
              </div>
              <div className="text-sm mt-1">
                <label htmlFor="tolak">tolak</label>
                <input
                  type="radio"
                  id="tolak"
                  name="jenis-penanganan"
                  className="ml-3.5"
                  onChange={() => setJenisPengaduan("ditolak")}
                />
              </div>
            </div>
            <div className="py-2">
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder="masukkan deskripsi"
                className="text-sm"
                onChange={(e) => setDeskripsi(e.target.value)}
                required
              ></textarea>
            </div>
            <button className="py-1 px-4 bg-blue-500 text-white rounded-md">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Penanganan;
