import Cards from "./Components/Pelayanan/Cards";
import SideMenu from "./Components/Menu/SideMenu";
import Navigasi from "./Components/Menu/Navigasi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUpKonfir from "./Components/Pelayanan/PopUpKonfir";
import pengaduanApi from "./api/pengaduanApi";

const Dashboard = () => {
  const [pengaduan, setPengaduan] = useState([]);
  const redirect = useNavigate();
  const [id, setId] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(function () {
    document.title = "Admin";

    pengaduanApi
      .getAllByStatus("terkirim")
      .then((res) => {
        setPengaduan(res.data.data);
        setIsLogin(true);
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

  const getPengaduan = async (status) => {
    try {
      const dataPengaduan = await pengaduanApi.getAllByStatus(status);
      setPengaduan(dataPengaduan.data.data);
    } catch (err) {
      redirect("/login");
    }
  };

  const ubahId = (id) => {
    setId(id);
  };

  return isLogin ? (
    <div className="dash-admin bg-slate-300">
      <div>
        <div className="text-right">
          <Navigasi />
        </div>
        <div>
          <SideMenu getPengaduan={getPengaduan} />
        </div>
      </div>
      <div className="isiNya">
        <div className="card-masuk">
          {pengaduan.map((q, k) => (
            <Cards
              key={k}
              data={q}
              setPengaduan={setPengaduan}
              ubahId={ubahId}
            />
          ))}
        </div>
      </div>
      <PopUpKonfir id={id} />
    </div>
  ) : (
    ""
  );
};

export default Dashboard;
