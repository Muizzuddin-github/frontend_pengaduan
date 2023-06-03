import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import katPengaduanApi from "../../api/katPengaduanApi";
import { RootContext } from "../GlobalState";
import auth from "../../api/auth";

const FormTambah = (props) => {
  const [image, setImage] = useState(null);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [uploadFoto, setUploadFoto] = useState(null);
  const redirect = useNavigate();

  const { token, setToken } = useContext(RootContext);

  const hideForm = () => {
    const close = document.querySelector(".tambah-kategori");
    close.classList.add("hidden");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nama", judul);
    data.append("deskripsi", deskripsi);
    data.append("foto", uploadFoto);
    try {
      await katPengaduanApi.add(data, token);

      const result = await katPengaduanApi.getAll(token);
      alert("berhasil menambah kategori");
      props.setKategori(result.data.data);
      hideForm();
      e.target.reset();
      setImage(null);
    } catch (err) {
      if (err.response.status === 401) {
        try {
          const newToken = await auth.getToken();
          await katPengaduanApi.add(data, newToken.data.accessToken);

          const result = await katPengaduanApi.getAll(
            newToken.data.accessToken
          );
          alert("berhasil menambah kategori");
          setToken(newToken.data.accessToken);
          props.setKategori(result.data.data);
          hideForm();
          e.target.reset();
          setImage(null);
        } catch (err) {
          if (err.response.status === 400) {
            alert(err.response.data.errors.join(" "));
            return;
          }
          redirect("/login");
        }
      } else {
        alert(err.response.data.errors.join(" "));
      }
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setUploadFoto(event.target.files[0]);
    }
  };

  return (
    <div className="tambah-kategori justify-center items-center bg-form p-40 left-0 right-0 top-0 bottom-0 fixed hidden">
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
              Tambah Kategori Baru
            </h2>
          </div>
          <form
            onSubmit={handleUpload}
            className="mt-8 space-y-3"
            action="#"
            method="POST"
          >
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Judul
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Judul Kategori"
                name="judul"
                id="judul"
                required
                onChange={(event) => setJudul(event.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Deskripsi
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
                required
                placeholder="Deskripsi Kategori"
                name="deskripsi"
                id="deskripsi"
                onChange={(event) => setDeskripsi(event.target.value)}
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
                      </a>{" "}
                      from your computer
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".jpg, .png, .jpeg"
                    required
                    onChange={handleImageChange}
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

export default FormTambah;
