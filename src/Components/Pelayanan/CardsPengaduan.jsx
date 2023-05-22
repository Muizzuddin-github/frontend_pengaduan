import Cards from "./Cards";
import { useState } from "react";
const CardsPengaduan = (props) => {
  return (
    <>
      {props.pengaduan.map((q, k) => (
        <Cards
          key={k}
          id={q.id}
          username={q.username}
          status={q.status}
          deskripsi={q.deskripsi}
          foto={q.foto}
          tanggal={q.tanggal}
          lokasi={q.lokasi}
        />
      ))}
    </>
  );
};

export default CardsPengaduan;
