import NavigasiUser from "./Components/Menu/NavgasiUser";
import KomentarUser from "./Components/User/KomentarUser";
import { useState, useEffect } from "react";
import Konfirmasi from "./Components/User/Konfirmasi";
import AddKomentar from "./Components/User/AddKomentar";
import auth from "./api/auth";
import { useNavigate } from "react-router-dom";
import krisarApi from "./api/krisarApi";

const KisarUser = () => {
  const redirect = useNavigate();
  const [id, setID] = useState(0);
  const [komentar, setKomentar] = useState([]);
  const [token, setToken] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  useEffect(function () {
    document.title = "Kritik Saran";
    auth
      .getToken()
      .then(({ data }) => {
        if (data.data[0].role !== "User") {
          redirect("/admin");
          return;
        }

        krisarApi.getAllByUser(data.accessToken).then((res) => {
          setKomentar(res.data.data);
          setIsLogin(true);
          setToken(data.accessToken);
        });
      })
      .catch((err) => redirect("/login"));
  }, []);

  const form = () => {
    const addForm = document.querySelector(".kisar-user .form-komentar");
    addForm.classList.remove("hidden");
    addForm.classList.add("flex");
  };

  const ubahKomentar = async (data) => {
    setKomentar(data);
  };

  return isLogin ? (
    <div className="kisar-user">
      <Konfirmasi
        id={id}
        setKomentar={setKomentar}
        komentar={komentar}
        token={token}
        setToken={setToken}
      />
      <AddKomentar
        setKomentar={setKomentar}
        komentar={komentar}
        token={token}
        setToken={setToken}
      />
      <NavigasiUser />
      <div>
        <div className="px-8 py-4">
          <div className="flex justify-between items-center mt-8">
            <h1 className="font-medium text-2xl">Kritik dan saran anda</h1>
            <button onClick={form}>
              <i className="fa-solid fa-plus text-3xl text-gray-600"></i>
            </button>
          </div>
          <div className="py-4 mt-5 flex flex-wrap justify-around items-center">
            {komentar.map((v, i) => (
              <KomentarUser
                key={i}
                id={v.id}
                kritik={v.kritik}
                saran={v.saran}
                setID={setID}
                ubahKomentar={ubahKomentar}
                token={token}
                setToken={setToken}
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

export default KisarUser;
