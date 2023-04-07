import NavigasiUser from "./Components/Menu/NavgasiUser";
import KomentarUser from "./Components/User/KomentarUser";
import { useState } from "react";
import Konfirmasi from "./Components/User/Konfirmasi";
import AddKomentar from "./Components/User/AddKomentar";

const KisarUser = () => {
    const [id,setID] = useState(0)
    const [komentar,setKomentar] = useState([
        {
            id : 1,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
        },
        {
            id : 2,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
        },
        {
            id : 3,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
        },
        {
            id : 4,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
        },
        {
            id : 5,
            kritik : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
            saran : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis minima. Nesciunt quasi labore itaque tenetur tempore reiciendis, numquam accusamus provident iure consequatur quis. Corporis blanditiis harum doloribus unde optio.",
        },

    ])

    const form = () => {
        const addForm = document.querySelector(".kisar-user .form-komentar")
        addForm.classList.remove("hidden")
        addForm.classList.add("flex")
    }

    return ( 
        <div className="kisar-user">
            <Konfirmasi id={id} setKomentar={setKomentar} komentar={komentar} />
            <AddKomentar setKomentar={setKomentar} komentar={komentar} />
            <NavigasiUser />
            <div>
                <div className="px-8 py-4">
                        <div className="flex justify-between items-center mt-8">
                            <h1 className="font-medium text-2xl">Kritik dan saran anda</h1>
                            <button onClick={form}><i className="fa-solid fa-plus text-3xl text-gray-600"></i></button>
                        </div>
                        <div className="py-4 mt-5 flex flex-wrap justify-around items-center">
                            {
                                komentar.map((v,i) => (
                                    <KomentarUser 
                                        key={i} 
                                        id={v.id}
                                        kritik={v.kritik} 
                                        saran={v.saran} 
                                        setID={setID}
                                    />
                                ))
                            }
                        </div>
                </div>
            </div>
        </div>
    );
}
 
export default KisarUser;