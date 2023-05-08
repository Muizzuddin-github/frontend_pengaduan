import CardsPengaduan from "./CardsPengaduan";
import SideMenu from "./Components/Menu/SideMenu";
import Navigasi from "./Components/Menu/Navigasi";
import { useEffect } from "react";

import { useState } from "react";
import axios from "axios";
const Dashboard = (props) => {
    const [id] = useState(0)
    const [pengaduan, setPengaduan] = useState([])

    useEffect(function(){
        axios.get("http://localhost:8080/pengaduan").then(({data}) => {
            setPengaduan(data.data)
        })
    },[])
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