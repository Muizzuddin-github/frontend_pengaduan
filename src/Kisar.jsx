import Komentar from "./Components/komentar/Komentar";
import { useState } from "react";
import DetilKomentar from "./Components/komentar/DetilKomentar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Kisar = () => {
    const [kritik,setKritik] = useState({})
    const redirect = useNavigate()
    const [komentar,setKomentar] = useState([])
    useEffect(function(){
        axios.get("http://localhost:8080/krisar").then(({data}) => {
            setKomentar(data.data)
        })
    },[])
    return ( 
        <div className="kisar">
            <DetilKomentar data={kritik} />
           <div className="px-8 py-4">
            <i className="fa-solid fa-arrow-left text-3xl cursor-pointer" onClick={() => redirect("/admin")}></i>
                <h1 className="mt-8 font-medium text-2xl">Kritik dan saran</h1>
                <div className="py-4 mt-5 flex flex-wrap justify-around items-center">
                    {
                        komentar.map((v,i) => (
                            <Komentar 
                            key={i} 
                            kritik={v.kritik} 
                            saran={v.saran} 
                            username={v.username}
                            setKritik={setKritik}
                            />
                        ))
                    }
                </div>
           </div>
        </div>
    );
}
 
export default Kisar;