import Komentar from "./Components/komentar/Komentar";
import { useState } from "react";
import DetilKomentar from "./Components/komentar/DetilKomentar";
import { useNavigate } from "react-router-dom";

const Kisar = () => {
    const [kritik,setKritik] = useState({})
    const redirect = useNavigate()
    const [komentar,setKomentar] = useState([
        {
            id : 1,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            username : "tito"
        },
        {
            id : 2,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            username : "ilhan"
        },
        {
            id : 3,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            username : "romi"
        },
        {
            id : 4,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            username : "muiz"
        },
        {
            id : 5,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            username : "gilang"
        },

    ])

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