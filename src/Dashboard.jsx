import Cards from "./Components/Pelayanan/Cards";
import SideMenu from "./Components/Menu/SideMenu";
import Navigasi from "./Components/Menu/Navigasi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUpKonfir from "./Components/Pelayanan/PopUpKonfir";
import pengaduanApi from "./api/pengaduanApi";
import auth from "./api/auth";

const Dashboard = () => {
  const [pengaduan, setPengaduan] = useState([]);
  const redirect = useNavigate();
  const [id, setId] = useState(0);

  const [token, setToken] = useState("");

  useEffect(function () {
    auth
      .getToken()
      .then(({ data }) => {
        const isAdmin = data.data[0].role;
        if (isAdmin !== "Admin") {
          redirect("/dashboard");
        } else {
          pengaduanApi
            .getAllByStatus("terkirim", data.accessToken)
            .then(({ data }) => setPengaduan(data.data));
          setToken(data.accessToken);
        }
      })
      .catch((err) => redirect("/login"));
  }, []);

  const getPengaduan = async (status) => {
    try {
      const dataPengaduan = await pengaduanApi.getAllByStatus(status, token);
      setPengaduan(dataPengaduan.data.data);
    } catch (err) {
      try {
        const { data } = await auth.getToken();
        const dataProses = await pengaduanApi.getAllByStatus(
          status,
          data.accessToken
        );
        setToken(data.accessToken);
        setPengaduan(dataProses.data.data);
      } catch (err) {
        redirect("/login");
      }
    }
  };

  const ubahId = (id) => {
    setId(id);
  };

  return (
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
              token={token}
              setToken={setToken}
              setPengaduan={setPengaduan}
              ubahId={ubahId}
            />
          ))}
        </div>
      </div>
      <PopUpKonfir id={id} />
    </div>
  );
};

export default Dashboard;
