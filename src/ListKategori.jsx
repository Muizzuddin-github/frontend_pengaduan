import CardsKategori from "./Components/ListKategori/Cards";
import FormTambah from "./Components/ListKategori/FormTambah";
import Navigasi from "./Components/Menu/Navigasi";
import { useState, useEffect } from "react";
import ConfirmHapus from "./Components/ListKategori/ConfirmHapus";
import { useNavigate } from "react-router-dom";
import FormEdit from "./Components/ListKategori/FormEdit";
import katPengaduanApi from "./api/katPengaduanApi"

const ListKategori = () => {
  const showForm = () => {
    const tampil = document.querySelector(".tambah-kategori");
    tampil.classList.remove("hidden");
    tampil.classList.add("flex");
  };

  const redirect = useNavigate();

  const [idKategori, setIdKategori] = useState(0);
  const [detilKategori, setDetilKategori] = useState({});
  const [kategori, setKategori] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(function () {
    document.title = "List-kategori";
    katPengaduanApi
      .getAll()
      .then((res) => {
        setKategori(res.data.data);
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

  return isLogin ? (
    <>
      <div>
        <Navigasi />
      </div>
      <div className="px-8 py-8">
        <div className="flex justify-between items-center mt-5 p-5">
          <h1 className="font-bold text-2xl">List Kategori</h1>
          <button onClick={showForm} className="flex items-center">
            <span className="text-lg font-bold mr-5">Tambah</span>
            <i className="fa-solid fa-plus text-3xl text-gray-600"></i>
          </button>
        </div>
        <div className="px-4 py-4 flex flex-wrap justify-center">
          {kategori.map((x, i) => (
            <CardsKategori
              key={i}
              idKategori={x.id}
              judul={x.nama}
              deskripsi={x.deskripsi}
              urlFoto={x.foto}
              setIdKategori={setIdKategori}
              setDetilKategori={setDetilKategori}
            />
          ))}
        </div>
        <div className="tambah">
          <FormTambah setKategori={setKategori} />
        </div>
        <FormEdit
          detilKategori={detilKategori}
          idKategori={idKategori}
          setKategori={setKategori}
        />
      </div>
      <ConfirmHapus idKategoriHapus={idKategori} setKategori={setKategori} />
    </>
  ) : (
    ""
  );
};

export default ListKategori;
