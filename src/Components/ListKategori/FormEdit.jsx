import { useState, useContext, useEffect } from "react";
import { RootContext } from "../GlobalState";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormEdit = (props) => {
  const [image, setImage] = useState(null);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [uploadFoto, setUploadFoto] = useState(null);
  const redirect = useNavigate();

  const { accessToken, setAccessToken } = useContext(RootContext);

  const handleUploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setUploadFoto(e.target.files[0]);
    }
  };

  useEffect(
    function () {
      setJudul(props.detilKategori.nama);
      setDeskripsi(props.detilKategori.deskripsi);
    },
    [props.detilKategori]
  );

  const hideForm = () => {
    const close = document.querySelector(".edit-kategori");
    close.classList.add("hidden");
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData();
      data.append("nama", judul);
      data.append("deskripsi", deskripsi);
      data.append("foto", uploadFoto);
      await axios.put(
        `http://localhost:8080/admin/kategori-pengaduan/${props.idKategori}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const result = await axios.get(
        "http://localhost:8080/users/kategori-pengaduan",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      alert("berhasil mengubah kategori");
      props.setKategori(result.data.data);
      const close = document.querySelector(".edit-kategori");
      close.classList.add("hidden");
    } catch (err) {
      if (err.response.status === 401) {
        try {
          const { data } = await axios.get(
            "http://localhost:8080/users/refresh-access-token"
          );
          const result = await axios.get(
            "http://localhost:8080/users/kategori-pengaduan",
            {
              headers: {
                Authorization: `Bearer ${data.accessToken}`,
              },
            }
          );
          setAccessToken(data.accessToken);
          props.setKategori(result.data.data);
        } catch (err) {
          redirect("/login");
        }
      }
    }
  };
  return (
    <div className="edit-kategori justify-center items-center bg-form p-40 left-0 right-0 top-0 bottom-0 fixed hidden">
      <div className="">
        <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl ">
          <a
            onClick={hideForm}
            className="close-form text-2xl font-bold"
            href="#"
          >
            X
          </a>
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              Edit Kategori
            </h2>
          </div>
          <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Judul
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Judul Kategori"
                defaultValue={props.detilKategori.nama}
                onChange={(e) => setJudul(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Deskripsi
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Deskripsi Kategori"
                defaultValue={props.detilKategori.deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Tambah Foto
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                  <div className="h-full w-full text-center flex flex-col items-center justify-center">
                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                      {image && (
                        <img
                          src={image}
                          alt="Preview"
                          className="h-36 object-center"
                        />
                      )}
                    </div>
                    <p className="pointer-none text-gray-500 ">
                      <span className="text-sm">Drag and drop</span> files here{" "}
                      <br /> or{" "}
                      <a className="text-blue-600 hover:underline">
                        select a file
                      </a>
                      from your computer
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".jpg, .png, .jpeg"
                    onChange={handleUploadImage}
                  />
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              <span>Maksimal 10MB</span>
            </p>
            <div>
              <button
                type="submit"
                className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
