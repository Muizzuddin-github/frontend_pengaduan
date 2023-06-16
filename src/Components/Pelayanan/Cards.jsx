import DetailPel from "./DetailPel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import pengaduanApi from "../../api/pengaduanApi";

const Cards = ({ data, setPengaduan, ubahId }) => {
  const redirect = useNavigate();

  const handleTerima = async () => {
    try {
      await pengaduanApi.changeStatus(data.id);
      setPengaduan((prev) => prev.filter((v) => v.id != data.id));
    } catch (err) {
      if (err.response.status === 401) {
        redirect("/login");
      } else {
        console.log(err);
      }
    }
  };

  const konfirmTolak = () => {
    ubahId(data.id);

    const tolak = document.querySelector(".popup-tolak");
    tolak.classList.remove("hidden");
  };

  return (
    <div className="p-6">
      <div className="w-[60%] mx-auto shadow-lg">
        <div className="relative m-0 flex bg-white p-4 rounded-md">
          <div className="flex-no-shrink">
            <img
              className="w-[400px] h-64 block mx-auto"
              src={data.foto}
              alt={""}
            />
          </div>
          <div className="flex-1 card-block relative">
            <div className="p-6">
              <DetailPel
                username={data.username}
                deskripsi={data.deskripsi}
                lokasi={data.lokasi}
                tanggal={data.tanggal}
              />
              <div className="flex mt-14 btn-cards">
                {data.status == "terkirim" && (
                  <>
                    <button
                      onClick={handleTerima}
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Terima
                    </button>
                    <button
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={konfirmTolak}
                    >
                      Tolak
                    </button>
                  </>
                )}

                {data.status === "diproses" && (
                  <Link
                    to={`/admin/pengaduan/${data.id}`}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    data-modal-target="popup-modal"
                    data-modal-toggle="popup-modal"
                  >
                    Tangani
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
