import { useState, useEffect } from "react";
import penangananApi from "../../api/penangananApi";

const ListPenanganan = () => {
  const [penanganan, setPenanganan] = useState([]);

  useEffect(function () {
    penangananApi.getAll().then((res) => {
      setPenanganan(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return penanganan.length ? (
    <div id="penanganan" className="py-32">
      <h1 className="text-center mb-10 font-bold text-2xl">
        Riwayat Penanganan
      </h1>
      <div className="flex flex-wrap gap-3 justify-around items-center mb-10">
        {penanganan.map((v, i) => (
          <div
            key={i}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg h-72 m-auto"
              src={v.foto_bukti}
              alt="gambar"
            />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Username : {v.username}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {v.deskripsi}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
};

export default ListPenanganan;
