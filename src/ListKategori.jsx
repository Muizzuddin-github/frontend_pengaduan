import CardsKategori from "./Components/ListKategori/Cards";
import FormTambah from "./Components/ListKategori/FormTambah";
import Navigasi from "./Components/Menu/Navigasi";
import { useState, useEffect } from "react";
import axios from "axios";
import ConfirmHapus from "./Components/ListKategori/ConfirmHapus";
import { useNavigate } from "react-router-dom";
import FormEdit from "./Components/ListKategori/FormEdit";

const ListKategori = () => {
  const redirect = useNavigate();
  const showForm = () => {
    const tampil = document.querySelector(".tambah-kategori");
    tampil.classList.remove("hidden");
    tampil.classList.add("flex");
  };

  const [idKategori, setIdKategori] = useState(0);
  const [detilKategori, setDetilKategori] = useState({});
  const [kategori, setKategori] = useState([]);
  const [token, setToken] = useState("");

  useEffect(function () {
    axios
      .get("http://localhost:8080/users/refresh-access-token")
      .then(({ data }) => {
        setToken(data.accessToken);
        axios
          .get("http://localhost:8080/users/kategori-pengaduan", {
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
          })
          .then(({ data }) => setKategori(data.data));
      })
      .catch((err) => {
        redirect("/login");
      });
  }, []);

  return (
    <>
      <div>
        <Navigasi />
      </div>
      <div className="px-8 py-8">
        <div className="flex justify-between items-center mt-5 p-5">
          <h1 className="font-bold text-2xl">List Kategori</h1>
          <button onClick={showForm}>
            <i className="fa-solid fa-plus text-3xl text-gray-600"></i>
          </button>
        </div>
        <div className="px-4 py-4 flex flex-wrap ">
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
          <FormTambah
            setKategori={setKategori}
            token={token}
            setToken={setToken}
          />
        </div>
        <FormEdit
          detilKategori={detilKategori}
          idKategori={idKategori}
          setKategori={setKategori}
          token={token}
          setToken={setToken}
        />
      </div>
      <ConfirmHapus
        idKategoriHapus={idKategori}
        setKategori={setKategori}
        token={token}
        setToken={setToken}
      />
    </>
  );
};

export default ListKategori;
