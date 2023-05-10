import CardsKategori from "./Components/ListKategori/Cards";
import FormUpload from "./Components/ListKategori/FormAdd";
import Navigasi from "./Components/Menu/Navigasi";

const ListKategori = () => {
  const showForm = () => {
    const tampil = document.querySelector('.tambah-kategori')
    tampil.classList.remove('hidden')
  }
  return (
    <>
    <div>
      <Navigasi/>
    </div>
    <div className="px-8 py-8"> 
      <div className="flex justify-between items-center mt-5 p-5">
        <h1 className="font-medium text-2xl">List Kategori</h1>
        <button onClick={showForm}><i className="fa-solid fa-plus text-3xl text-gray-600"></i></button>
      </div>
      <div className="px-4 py-4 flex flex-wrap ">
        <CardsKategori/>
        <CardsKategori/>
      </div>
      <div>
        <FormUpload/>
      </div>
    </div>
    </>
  );
};

export default ListKategori;
