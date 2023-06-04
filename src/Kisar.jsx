import Komentar from "./Components/komentar/Komentar";
import DetilKomentar from "./Components/komentar/DetilKomentar";
import { useEffect, useState } from "react";
import krisarApi from "./api/krisarApi";
import Navigasi from "./Components/Menu/Navigasi";
import auth from "./api/auth";

const Kisar = () => {
  const [kritik, setKritik] = useState({});
  const [komentar, setKomentar] = useState([]);
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(function () {
    document.title = "Krisar";
    auth
      .getToken()
      .then(({ data }) => {
        const isAdmin = data.data[0].role;
        if (isAdmin !== "Admin") {
          redirect("/dashboard");
          return;
        }

        krisarApi.getAll(data.accessToken).then((res) => {
          setToken(data.accessToken);
          setIsLogin(true);
          setKomentar(res.data.data);
        });
      })
      .catch((err) => redirect("/login"));
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
