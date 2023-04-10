import CardsPengaduan from "./CardsPengaduan";
import SideMenu from "./Components/Menu/SideMenu";
import Navigasi from "./Components/Menu/Navigasi";
import { useState } from "react";
const Dashboard = (props) => {
    const [id] = useState(0)
    const [pengaduan, setPengaduan] = useState([
        {
            id : 1,
            nama : "Agus",
            kendala : 'banjir',
            lokasi : 'Jl.Matahari',
            status : "terkirim"
        },
        {
            id : 2,
            nama : "Budi",
            kendala : 'tsunami',
            lokasi : 'Jl.Matahari',
            status : "terkirim"
        },
        {
            id : 3,
            nama : "Bambang",
            kendala : 'skill issue',
            lokasi : 'Jl.Matahari',
            status : "terkirim"
        },
        {
            id : 4,
            nama : "Siti",
            kendala : 'banjir',
            lokasi : 'Jl.Matahari',
            status : "terkirim"
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