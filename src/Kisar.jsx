import Komentar from "./Components/komentar/Komentar";
import DetilKomentar from "./Components/komentar/DetilKomentar";
import { useEffect, useContext, useState } from "react";
import krisarApi from "./api/krisarApi";
import { RootContext } from "./Components/GlobalState";
import Navigasi from "./Components/Menu/Navigasi";

const Kisar = () => {
  const [kritik, setKritik] = useState({});
  const [komentar, setKomentar] = useState([]);
  const { token, setToken } = useContext(RootContext);

  useEffect(function () {
    krisarApi.getAll(token).then(({ data }) => {
      setKomentar(data.data);
    });
  }, []);
  return (
    <div className="kisar">
      <DetilKomentar data={kritik} />
      <div>
        <Navigasi />
        <h1 className="mt-8 font-medium text-2xl">Kritik dan saran</h1>
        <div className="py-4 mt-5 flex flex-wrap justify-around items-center">
          {komentar.map((v, i) => (
            <Komentar
              key={i}
              kritik={v.kritik}
              saran={v.saran}
              username={v.username}
              setKritik={setKritik}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kisar;
