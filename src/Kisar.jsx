import Komentar from "./Components/komentar/Komentar";
import DetilKomentar from "./Components/komentar/DetilKomentar";
import { useEffect, useState } from "react";
import krisarApi from "./api/krisarApi";
import Navigasi from "./Components/Menu/Navigasi";
import { useNavigate } from "react-router-dom";

const Kisar = () => {
  const [kritik, setKritik] = useState({});
  const [komentar, setKomentar] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const redirect = useNavigate();

  useEffect(function () {
    document.title = "Krisar";
    krisarApi
      .getAll()
      .then((res) => {
        setIsLogin(true);
        setKomentar(res.data.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          redirect("/login");
        } else if (err.response.status === 403) {
          redirect("/dashboard");
        } else {
          console.log(err);
        }
      });
  }, []);
  return isLogin ? (
    <div className="kisar">
      <DetilKomentar data={kritik} />
      <div>
        <Navigasi />
        <div className="px-8 py-8">
          <h1 className="mt-8 font-medium text-2xl">Kritik dan saran</h1>
          <div className="py-4 mt-5 flex flex-wrap justify-around items-center ">
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
    </div>
  ) : (
    ""
  );
};

export default Kisar;
