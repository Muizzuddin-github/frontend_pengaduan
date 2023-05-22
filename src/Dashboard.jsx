import Cards from "./Components/Pelayanan/Cards";
import SideMenu from "./Components/Menu/SideMenu";
import Navigasi from "./Components/Menu/Navigasi";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [pengaduan, setPengaduan] = useState([]);
  const [token, setToken] = useState("");
  const redirect = useNavigate();

  useEffect(function () {
    axios
      .get("http://localhost:8080/users/refresh-access-token")
      .then(({ data }) => {
        setToken(data.accessToken);
        axios
          .get("http://localhost:8080/admin/pengaduan/terkirim", {
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
          })
          .then(({ data }) => setPengaduan(data.data));
      })
      .catch((err) => {
        redirect("/login");
      });
  }, []);

  const getPengaduan = async (status) => {
    try {
      const dataProses = await axios.get(
        `http://localhost:8080/admin/pengaduan/${status}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPengaduan(dataProses.data.data);
    } catch (err) {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/users/refresh-access-token"
        );

        const dataProses = await axios.get(
          `http://localhost:8080/admin/pengaduan/${status}`,
          {
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
          }
        );

        setToken(data.accessToken);
        setPengaduan(dataProses.data.data);
      } catch (err) {
        redirect("/login");
      }
    }
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
