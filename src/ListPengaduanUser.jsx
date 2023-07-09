import { useEffect, useState } from "react";
import NavigasiUser from "./Components/Menu/NavgasiUser";
import Selection from "./Components/listPengaduan/Selection";
import pengaduanApi from "./api/pengaduanApi";
import { useNavigate } from "react-router-dom";

function ListPengaduanUser() {
  const [listPengaduan, setListPengaduan] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const redirect = useNavigate();
  const [src, setSrc] = useState("terkirim");

  useEffect(
    function () {
      document.title = "Riwayat Pengaduan";
      pengaduanApi
        .getAllByUserAndStatus(src)
        .then((res) => {
          setListPengaduan(res.data.data);
          setUser(res.data.user);
          setIsLogin(true);
          setUser(res.data.user);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            redirect("/login");
          } else if (err.response.status === 403) {
            redirect("/dashboard");
          } else {
            console.log(err);
          }
        });
    },
    [src]
  );

  return isLogin ? (
    <div className="bg-color-dark grey">
      <NavigasiUser user={user} />
      <div className="max-w-lg text-3xl font-bold leading-normal text-gray-900 dark:text-black">
        <p>Riwayat Pengaduan</p>
      </div>
      <Selection setSrc={setSrc} />
      <div className="absolut grid grid-cols-2 gap-4 place-content-center py-10 px-20">
        {listPengaduan.map((v, i) => {
          let tanggal = new Date(v.tanggal);
          tanggal = `${tanggal.getDate()} ${
            tanggal.getMonth() < 9
              ? "0" + (tanggal.getMonth() + 1)
              : tanggal.getMonth() + 1
          } ${tanggal.getFullYear()}`;

          return (
            <div
              key={i}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={v.foto}
              />
              <div className="flex flex-col h-full p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {v.nama}
                </h5>
                <p className="mb-3 ml-3 font-normal text-gray-700 dark:text-gray-400">
                  {v.deskripsi}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 self-end">
                  {tanggal}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 self-end">
                  {v.status}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}
export default ListPengaduanUser;
