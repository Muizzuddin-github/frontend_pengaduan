const DetilKomentar = (props) => {

    const tutup = (e) => {

        const layarHitam = e.target.parentElement.parentElement
        layarHitam.classList.add("hidden")
        layarHitam.classList.remove("flex")
        
    }

    return ( 
        <div className="layar-hitam h-[100vh] w-full fixed hidden z-10 justify-center items-center">
            <div className="w-96 bg-white px-2 py-3 rounded shadow-km m-3 flex flex-col">
                <h2 className="text-sm text-gray-600">Dari: {props.data.username}</h2>
                <hr className="mt-2" />
                <div className="mt-3 text-sm px-1">
                    <p>kritik</p>
                    <p className="kritik">{props.data.kritik}</p>
                </div>
                <div className="mt-3 text-sm px-1">
                    <p>saran</p>
                    <p className="saran">{props.data.saran}</p>
                </div>
                <button className="self-end mt-2 cursor-pointer" onClick={tutup}>tutup</button>
            </div>
        </div>
    );
}
 
export default DetilKomentar;

