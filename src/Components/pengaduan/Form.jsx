import { useState } from "react";
import pengaduanApi from "../../api/pengaduanApi";

const Form = ({ title, img, modify, id }) => {
  const [notif, setNotif] = useState({});
  const [foto, setFoto] = useState(null);
  const [lokasi, setLokasi] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const showNotif = (msg) => {
    setNotif({ show: true, msg: msg });
    setTimeout(() => {
      setNotif(false);
    }, 3000);
  };

  const submit = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData();
      data.append("foto", foto);
      data.append("lokasi", lokasi);
      data.append("deskripsi", deskripsi);
      data.append("kategoriPengaduan", id);

      await pengaduanApi.add(data);

      showNotif("Pengaduan terkirim");
      e.target.reset();
    } catch (err) {
      if (err.response.status === 400 || err.response.status === 404) {
        showNotif(err.response.data.errors.join("\n"));
      } else if (err.response.status === 401) {
        redirect("/login");
      } else if (err.response.status === 403) {
        redirect("/dashboard");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <form
      onSubmit={submit}
      className="relative bg-gray-300 w-1/2 py-5 mx-auto rounded-md my-5"
    >
      {notif.show && (
        <div className="absolute top-0 bg-green-400 p-3 rounded-lg w-full">
          {notif.msg}
        </div>
      )}
      <div className="my-4">
        <h1 className="text-3xl">{title}</h1>
      </div>
      <div>
        <img src={img} className="w-1/4 block mx-auto" alt="" />
      </div>
      <div className="w-2/3 mx-auto">
        <div className="mb-3">
          <label htmlFor="" className="block text-left mb-2">
            Kendala :
          </label>
          {modify ? (
            <input
              type="text"
              placeholder="Kendala"
              className="p-2 border-black rounded-lg w-full"
              onChange={(e) => setDeskripsi(e.target.value)}
              required
            />
          ) : (
            <input
              type="text"
              placeholder="Kendala"
              disabled
              className="p-2 border-black rounded-lg w-full"
            />
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block text-left mb-2">
            Lokasi :
          </label>
          {modify ? (
            <input
              type="text"
              placeholder="Lokasi"
              className="p-2 border-black rounded-lg w-full"
              onChange={(e) => setLokasi(e.target.value)}
              required
            />
          ) : (
            <input
              type="text"
              disabled
              placeholder="Lokasi"
              className="p-2 border-black rounded-lg w-full"
            />
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block text-left mb-2">
            Foto :
          </label>
          {modify ? (
            <input
              type="file"
              className="p-2 border-black rounded-lg w-full"
              onChange={(e) => setFoto(e.target.files[0])}
              required
            />
          ) : (
            <input
              type="file"
              disabled
              className="p-2 border-black rounded-lg w-full"
            />
          )}
        </div>
        {modify ? (
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Kirim
          </button>
        ) : (
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() =>
              showNotif("Silahkan pilih pengaduan terlebih dahulu")
            }
          >
            Kirim
          </button>
        )}
      </div>
    </form>
  );
};
export default Form;
