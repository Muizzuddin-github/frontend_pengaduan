import Navigasi from "./Components/Menu/Navigasi";
import { useState, useEffect } from "react";
import SinglePengaduan from "./Components/Penanganan/SinglePengaduan";
import { useParams, useNavigate } from "react-router-dom";
import penangananApi from "./api/penangananApi";

const Penanganan = () => {
  const [img, setImg] = useState(null);
  const [jenisPengaduan, setJenisPengaduan] = useState("Pilih");
  const [imgUpload, setImgUpload] = useState(null);
  const [deskripsi, setDeskripsi] = useState("");
  const [errNotUploadImg, setErrNotUploadImg] = useState(false);
  const redirect = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  // single pengaduan
  const [singlePengaduan, setSinglePengaduan] = useState({});
  const { id } = useParams();

  useEffect(function () {
    document.title = "Penanganan";
    penangananApi
      .getSingle(id)
      .then((res) => {
        setSinglePengaduan(res.data.data[0]);
        setIsLogin(true);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          redirect("/login");
        } else if (err.response.status === 403) {
          redirect("/dashboard");
        } else if (err.response.status === 400) {
          alert(err.response.data.errors.join(" "));
        } else {
          console.log(err);
        }
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
    e.preventDefault();
    const data = new FormData();
    data.append("foto_bukti", imgUpload);
    data.append("deskripsi", deskripsi);
    data.append("pengaduanID", +id);
    data.append("status", jenisPengaduan);

    try {
      if (jenisPengaduan === "Pilih") {
        alert("silahkan piliah jenis penangan terlebih dahulu");
        return;
      }

      if (!imgUpload && jenisPengaduan === "selesai") {
        setErrNotUploadImg(true);
        return;
      }

      await penangananApi.add(data);

      alert("berhasil melakukan penanganan");
      redirect("/admin");
      e.target.reset();
    } catch (err) {
      if (err.response.status === 401) {
        redirect("/login");
      } else if (err.response.status === 400 || err.response.status === 404) {
        alert(err.response.data.errors.join("\n"));
      } else {
        console.log(err);
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
              <select
                className="text-[.8rem]"
                onChange={(e) => setJenisPengaduan(e.target.value)}
              >
                <option value="Pilih">Pilih</option>
                <option value="selesai">Selesai</option>
                <option value="ditolak">Ditolak</option>
              </select>
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
