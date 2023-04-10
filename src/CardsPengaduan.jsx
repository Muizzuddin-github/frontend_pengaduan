import Cards from "./Components/Pelayanan/Cards";
import { useState } from "react";
const CardsPengaduan = (props) => {
    return (
        <>
        {
            props.pengaduan.map((q,k)=> (
                <Cards
                key={k}
                id={q.id}
                nama={q.nama}
                status={q.status}
                kendala={q.kendala}
                lokasi={q.lokasi}
                />
            ))
        }
        </>
    );
}
 
export default CardsPengaduan;