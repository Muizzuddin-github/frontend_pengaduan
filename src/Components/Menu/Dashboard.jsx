import CardsPengaduan from "../../CardsPengaduan";
import SideMenu from "./SideMenu";
import Navigasi from "./Navigasi";
import { useState } from "react";
const Dashboard = (props) => {
    const [id,setID] = useState(0)
    const [pengaduan, setPengaduan] = useState([
        {
            id : 1,
            nama : "Agus",
            kendala : 'banjir',
            lokasi : 'Jl.ahshshs'
        },
        {
            id : 2,
            nama : "Budi",
            kendala : 'tsunami',
            lokasi : 'Jl.ahshshs'
        },
        {
            id : 3,
            nama : "Bambang",
            kendala : 'skill issue',
            lokasi : 'Jl.ahshshs'
        },
        {
            id : 4,
            nama : "Siti",
            kendala : 'banjir',
            lokasi : 'Jl.ahshshs'
        },
    ])
    return (
        <div className="bg-slate-300">
            <div>
                <div className="text-right">
                    <Navigasi/>
                </div>
                <div>
                    <SideMenu
                    setPengaduan={setPengaduan}/>
                </div>
            </div>
            <div className="isiNya">
                <div className="card-masuk">
                    <CardsPengaduan
                    pengaduan={pengaduan}/>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;