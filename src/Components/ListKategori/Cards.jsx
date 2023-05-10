const CardsKategori = () => {
    return (
        <>
        <div className="card card-compact w-72 bg-base-100 shadow-xl bg-black rounded-lg">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="p-3">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Judul</h3>
                <p className="mb-3 font-normal text-black dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className="flex justify-between w-32">
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ubah</a>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hapus</a>
                </div>
            </div>

        </div>

        </>
    );
}
 
export default CardsKategori;