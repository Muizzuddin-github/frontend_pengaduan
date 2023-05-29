import Cards from "./Components/Pelayanan/Cards";
import SideMenu from "./Components/Menu/SideMenu";
import Navigasi from "./Components/Menu/Navigasi";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PopUpKonfir from "./Components/Pelayanan/PopUpKonfir";
import { RootContext } from "./Components/GlobalState";
import pengaduanApi from "./api/pengaduanApi";
import auth from "./api/auth";

const Dashboard = () => {
  const [pengaduan, setPengaduan] = useState([]);
  const redirect = useNavigate();
  const [id, setId] = useState(0);

  const { token, setToken } = useContext(RootContext);

  useEffect(function () {
    pengaduanApi
      .getAllByStatus("terkirim", token)
      .then(({ data }) => setPengaduan(data.data));
  }, []);

  const getPengaduan = async (status) => {
    try {
      const dataPengaduan = await pengaduanApi.getAllByStatus(status, token);
      setPengaduan(dataPengaduan.data.data);
      console.log(dataPengaduan);
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
