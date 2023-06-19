import krisarApi from "../../api/krisarApi";
import { useNavigate } from "react-router-dom";

const Konfirmasi = (props) => {
  const redirect = useNavigate();

  const tutup = (e) => {
    const konfim = e.target.parentElement.parentElement.parentElement;
    konfim.classList.remove("flex");
    konfim.classList.add("hidden");
  };

  const hapus = async (e) => {
    try {
      await krisarApi.del(props.id);
      const data = props.komentar.filter((val) => val.id != props.id);
      props.setKomentar(data);
      tutup(e);
    } catch (err) {
      if (err.response.status === 401) {
        redirect("/login");
      } else if (err.response.status == 403) {
        redirect("/admin");
      }
    }
  };

  return (
    <div className="layar-hitam h-[100vh] w-full fixed hidden z-10 justify-center items-center">
      <div className="w-96 bg-white px-2 py-3 rounded shadow-km m-3 flex flex-col">
        <h2 className="text-red-500 font-semibold text-xl">
          Yakin mau dihapus?
        </h2>
        <hr />
        <div className="w-1/2 self-end flex justify-between text-white mt-5">
          <button
            className="self-end mt-2 cursor-pointer bg-red-500 py-1 px-3 rounded text-sm"
            onClick={hapus}
          >
            hapus
          </button>
          <button
            className="self-end mt-2 cursor-pointer bg-blue-500 py-1 px-3 rounded text-sm"
            onClick={tutup}
          >
            tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Konfirmasi;
