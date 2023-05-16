import DeleteConfirm from "./DeleteConfirm";
import FormEdit from "./FormEdit";
const CardsKategori = (props) => {
  const showUbahForm = () => {
    const tampil = document.querySelector(".edit-kategori");
    tampil.classList.remove("hidden");
    tampil.classList.add("flex");
  };

  const showConfirm = () => {
    const tampil = document.querySelector(".hapus-kategori");
    tampil.classList.remove("hidden");
  };
  return (
    <>
      <div className="card card-compact w-72 bg-base-100 shadow-xl bg-black rounded-lg m-4">
        <figure>
          <img className="h-56 w-auto" src={props.urlFoto} alt="Shoes" />
        </figure>
        <div className="p-3">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.judul}
          </h3>
          <p className="mb-3 font-normal text-black dark:text-white">
            {props.deskripsi}
          </p>
          <div className="flex justify-between w-32">
            <button
              href="#"
              onClick={showUbahForm}
              className="ubah-kategori inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ubah
            </button>
            <button
              href="#"
              onClick={showConfirm}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
      <div>
        <FormEdit/>
        <DeleteConfirm />
      </div>
    </>
  );
};

export default CardsKategori;
