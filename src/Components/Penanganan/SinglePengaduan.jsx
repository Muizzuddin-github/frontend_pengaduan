import { useState, useEffect } from "react";

const SinglePengaduan = ({ singlePengaduan }) => {
  const [tanggal, setTanggal] = useState("");

  useEffect(
    function () {
      const tgl = new Date(singlePengaduan.tanggal);
      setTanggal(
        `${tgl.getDate()} ${
          tgl.getMonth() < 9 ? "0" + (tgl.getMonth() + 1) : tgl.getMonth() + 1
        } ${tgl.getFullYear()}`
      );
    },
    [singlePengaduan]
  );

  return (
    <div className="p-8 flex mx-2 border">
      <figure className="w-56 mr-2">
        <img className="w-full" src={singlePengaduan.foto} alt="" />
      </figure>
      <div className="w-80 h-[25.7rem] flex flex-col ml-2">
        <div className="p-2">
          <h1 className="text-xl">Dari : {singlePengaduan.username}</h1>
          <p className="text-sm">tanggal : {tanggal}</p>
          <hr className="mt-2 border" />
        </div>
        <div className="-mt-2 p-2 h-full">
          <p className="mb-2">deskripsi</p>
          <p className="text-sm">{singlePengaduan.deskripsi}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePengaduan;
