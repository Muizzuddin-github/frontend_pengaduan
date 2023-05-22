import CardsPengaduan from "./Components/Pelayanan/CardsPengaduan";
import SideMenu from "./Components/Menu/SideMenu";
import Navigasi from "./Components/Menu/Navigasi";
import { useEffect, useContext } from "react";
import { RootContext } from "./Components/GlobalState";

import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
const Dashboard = (props) => {
  const [id] = useState(0);
  const [pengaduan, setPengaduan] = useState([]);
  const { accessToken, setAccessToken } = useContext(RootContext);

  useEffect(
    function () {
      axios
        .get("http://localhost:8080/admin/pengaduan/terkirim", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(({ data }) => {
          setPengaduan(data.data);
        })
        .catch((err) => {
          axios
            .get("http://localhost:8080/users/refresh-access-token")
            .then(({ data }) => {
              setAccessToken(data.accessToken);
            })
            .catch((err) => {
              redirect("/login");
            });
        });
    },
    [accessToken]
  );

  const getProses = async () => {
    let token = "";
    try {
      const dataProses = await axios.get(
        "http://localhost:8080/admin/pengaduan/diproses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(dataProses.data.data);
      setPengaduan(dataProses.data.data);
    } catch (err) {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/users/refresh-access-token"
        );
        token = data.accessToken;
        const dataProses = await axios.get(
          "http://localhost:8080/admin/pengaduan/diproses",
          {
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
          }
        );
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
          <SideMenu getProses={getProses} />
        </div>
      </div>
      <div className="isiNya">
        <div className="card-masuk">
          <CardsPengaduan pengaduan={pengaduan} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
