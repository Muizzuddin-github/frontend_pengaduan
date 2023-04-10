const KomentarUser = (props) => {
    const hapus = () => {
        props.setID(props.id)
        const konfirmasi = document.querySelector(".kisar-user .layar-hitam")
        konfirmasi.classList.remove("hidden")
        konfirmasi.classList.add("flex")
    }

    return ( 
        <div className="w-72 bg-white px-2 py-3 hover:scale-[1.03] transition duration-150 rounded-t-md rounded-br-md shadow-km m-3 flex flex-col break-words">
            <h2 className="text-sm text-gray-600">Anda</h2>
            <hr className="mt-2" />
            <div className="mt-3 text-sm px-1">
                <p className="font-semibold">kritik</p>
                <p>{props.kritik}</p>
            </div>
            <div className="mt-3 text-sm px-1">
                <p className="font-semibold">saran</p>
                <p>{props.saran}</p>
            </div>
            <button className="self-end bg-red-500 text-white py-1 px-3 rounded text-sm mt-4" onClick={hapus}>Hapus</button>
        </div>
    );
}
 
export default KomentarUser;