import axios from "axios";
import { useContext } from "react";
import { RootContext } from "../GlobalState";

const ConfirmHapus = (props) => {
  const { accessToken, setAccessToken } = useContext(RootContext);

  const hapusKategori = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/admin/kategori-pengaduan/${props.idKategoriHapus}`,
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
      alert("berhasil menghapus");
      props.setKategori(result.data.data);
      const close = document.querySelector(".hapus-kategori");
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
      console.log(err);
    }
  };
  const hideConfirm = () => {
    const hide = document.querySelector(".hapus-kategori");
    hide.classList.add("hidden");
  };
  return (
    <>
      <div>
        <div className="hapus-kategori antialiased bg-gray-200 text-gray-900 font-sans bg-form p-40 left-0 right-0 top-0 bottom-0 fixed hidden">
          <div className="px-4  flex items-center justify-center">
            <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0" />
            <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
              <div className="md:flex items-center">
                <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                  <ion-icon name="alert" size="large" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                  <p className="font-bold">Hapus Kategori</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Apakah anda yakin menghapus kategori ini?
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                <button
                  onClick={hapusKategori}
                  className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                >
                  Hapus Kategori
                </button>
                <button
                  onClick={hideConfirm}
                  className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
                    md:mt-0 md:order-1"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmHapus;
