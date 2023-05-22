import Cards from "./Cards";
import { useState, useEffect } from "react";
const DetailPel = (props) => {
  const [username, setUsername] = useState("");
  const [kendala, setKendala] = useState("");
  const [lokasi, setLokasi] = useState();
  const [tanggal, settanggal] = useState();

  useEffect(function () {
    setUsername(props.username);
    setKendala(props.deskripsi);
    setLokasi(props.lokasi);

    const t = new Date(props.tanggal);
    settanggal(
      `${t.getDate()} ${
        t.getMonth() === 12 ? t.getMonth() : t.getMonth() + 1
      } ${t.getFullYear()}`
    );
  });

  return (
    <div>
      <p className="font-medium text-xl p-1 ">Nama :{username}</p>
      <p className="font-medium text-xl p-1">Kendala : {kendala}</p>
      <p className="font-medium text-xl p-1">Lokasi : {lokasi}</p>
      <p className="font-medium text-xl p-1">Tanggal : {tanggal}</p>
    </div>
  );
};

export default DetailPel;
