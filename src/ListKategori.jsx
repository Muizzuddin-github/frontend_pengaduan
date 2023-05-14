import CardsKategori from "./Components/ListKategori/Cards";
import FormUpload from "./Components/ListKategori/Form";
import Navigasi from "./Components/Menu/Navigasi";
import { useState } from "react";

const ListKategori = () => {
  const showForm = () => {
    const tampil = document.querySelector('.tambah-kategori')
    tampil.classList.remove('hidden')
    tampil.classList.add('flex')
  }
  
  const [kategori,setKategori] = useState([
    {
      judul : "Banjir",
      deskripsi : "Laporkan Banjir",
      urlFoto : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    },
    {
      judul : "Pohon Tumbang",
      deskripsi : "Laporkan Pohon Tumbang",
      urlFoto : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    },
    {
      judul : "Lampu Jalan Mati",
      deskripsi : "Laporkan Lampu Jalan Mati",
      urlFoto : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    }
  ])


  return (
    <>
    <div>
      <Navigasi/>
    </div>
    <div className="px-8 py-8"> 
      <div className="flex justify-between items-center mt-5 p-5">
        <h1 className="font-bold text-2xl">List Kategori</h1>
        <button onClick={showForm}><i className="fa-solid fa-plus text-3xl text-gray-600"></i></button>
      </div>
      <div className="px-4 py-4 flex flex-wrap ">
        {
          kategori.map((x,i)=>(
            <CardsKategori key={i}
            judul = {x.judul}
            deskripsi = {x.deskripsi}
            urlFoto = {x.urlFoto}/>
          ))
        }
      </div>
      <div className="tambah">
        <FormUpload judul="Tambah Kategori Baru"/>
      </div>
    </div>
    </>
  );
};

export default ListKategori;
