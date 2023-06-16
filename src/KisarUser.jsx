import NavigasiUser from "./Components/Menu/NavgasiUser";
import KomentarUser from "./Components/User/KomentarUser";
import { useState, useEffect } from "react";
import Konfirmasi from "./Components/User/Konfirmasi";
import AddKomentar from "./Components/User/AddKomentar";
import { useNavigate } from "react-router-dom";
import krisarApi from "./api/krisarApi";

const KisarUser = () => {
  const redirect = useNavigate();
  const [id, setID] = useState(0);
  const [komentar, setKomentar] = useState([]);
  const [user, setUser] = useState({});

  const [isLogin, setIsLogin] = useState(false);

  useEffect(function () {
    document.title = "Kritik Saran";
    krisarApi
      .getAllByUser()
      .then((res) => {
        setKomentar(res.data.data);
        setIsLogin(true);
        setUser(res.data.user);
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
      <Konfirmasi id={id} setKomentar={setKomentar} komentar={komentar} />
      <AddKomentar setKomentar={setKomentar} komentar={komentar} />
      <NavigasiUser user={user} />
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
