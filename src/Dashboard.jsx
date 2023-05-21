import CardsPengaduan from "./CardsPengaduan";
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
          console.log(data);
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

  return (
    <div className="dash-admin bg-slate-300">
      <div>
        <div className="text-right">
          <Navigasi />
        </div>
        <div>
          <SideMenu setPengaduan={setPengaduan} />
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
