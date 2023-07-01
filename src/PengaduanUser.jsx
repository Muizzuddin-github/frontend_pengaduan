import { useState, useEffect } from "react";
import Form from "./Components/pengaduan/Form";
import Kategori from "./Components/pengaduan/Kategori";
import NavigasiUser from "./Components/Menu/NavgasiUser";
import katPengaduanApi from "./api/katPengaduanApi";
import { useNavigate } from "react-router-dom";

const PengaduanUser = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [kategoriPengaduan, setKategoriPengaduan] = useState([]);
  const [user, setUser] = useState({});
  const [pilihKatPengaduan, setPilihKatPengaduan] = useState({});
  const redirect = useNavigate();

  useEffect(function () {
    document.title = "Dashboard";
    katPengaduanApi
      .getAll()
      .then((res) => {
        if (res.data.user.role !== "User") {
          redirect("/admin");
          return;
        }
        setKategoriPengaduan(res.data.data);
        setUser(res.data.user);
        setIsLogin(true);
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
  }, []);

  const handleClick = (data) => {
    setPilihKatPengaduan(data);
  };
  return isLogin ? (
    <div>
      <NavigasiUser user={user} />
      <div className="container mx-auto mt-4 text-center my-5">
        <h3>Silahkan Pilih Pengaduan Anda</h3>
        <div className="flex mt-10">
          {kategoriPengaduan.map((v, i) => (
            <Kategori key={i} nama={v.nama} onClick={() => handleClick(v)} />
          ))}
        </div>
        <div>
          {Object.keys(pilihKatPengaduan).length ? (
            <Form
              id={pilihKatPengaduan.id}
              title={pilihKatPengaduan.nama}
              img={pilihKatPengaduan.foto}
              modify={true}
            />
          ) : (
            <Form
              title={"Pilih pengaduan anda"}
              img={"choose.jpg"}
              modify={false}
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default PengaduanUser;
