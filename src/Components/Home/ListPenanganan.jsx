import { useState, useEffect } from "react";
import penangananApi from "../../api/penangananApi";
import CardHome from "./CardHome";

const ListPenanganan = () => {
  const [penanganan, setPenanganan] = useState([]);

  useEffect(function () {
    penangananApi.getAll().then((res) => {
      setPenanganan(res.data.data);
    });
  }, []);
  return penanganan.length ? (
    <div className="my-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-5">
          <h1 className="text-4xl font-bold text-center">Riwayat Penanganan</h1>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {penanganan.map((item) => {
            return (
              <CardHome
                key={item.id}
                image={item.foto_bukti}
                title={item.username}
                desc={item.deskripsi}
              />
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ListPenanganan;
