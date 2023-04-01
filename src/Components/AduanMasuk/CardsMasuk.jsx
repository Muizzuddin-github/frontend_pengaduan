const CardMasuk = () => {
    return (
        <div className="flex justify-around items-center w-[70%] bg-slate-600 rounded-md m-auto p-10 mt-10">
            <div className="w-[400px]">
                <img src="../../../public/www.jpg" alt="" />
            </div>
            <div className="flex flex-col">
                <div>
                    <p>Nama</p>
                    <p>Kendala</p>
                    <p>Lokasi</p>
                </div>
                <div className="flex justify-around">
                    <button>Tolak</button>
                    <button>Terima</button>
                </div>
            </div>
        </div>
    );
}
 
export default CardMasuk;