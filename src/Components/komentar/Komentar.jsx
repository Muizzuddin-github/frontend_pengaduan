const Komentar = (props) => {

    const selengkapnya = () => {
        props.setKritik({
            kritik : props.kritik,
            saran : props.saran,
            username : props.username
        })
        const layarHitam = document.querySelector(".kisar .layar-hitam")
        layarHitam.classList.remove("hidden")
        layarHitam.classList.add("flex")
    }

    return ( 
        <div className="w-72 bg-white px-2 py-3 hover:scale-[1.03] transition duration-150 rounded-t-md rounded-br-md shadow-km m-3 flex flex-col">
            <h2 className="text-sm text-gray-600">Dari: {props.username}</h2>
            <hr className="mt-2" />
            <div className="mt-3 text-sm px-1">
                <p>kritik</p>
                <p className="">{
                    (props.kritik.length) <= 75 ? props.kritik : props.kritik.slice(0,70) + "..." 
                }</p>
            </div>
            <button className="self-end mt-2 cursor-pointer" onClick={selengkapnya}>selengkapnya</button>
        </div>
    );
}
 
export default Komentar;