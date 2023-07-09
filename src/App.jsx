import Login from "./Components/Login/Login";
import { useEffect } from "react";
import AOS from "aos";

import Daftar from "./Components/Daftar/Daftar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ListKategori from "./ListKategori";
import Penanganan from "./Penanganan";
import Kisar from "./Kisar";
import KisarUser from "./KisarUser";
import PengaduanUser from "./PengaduanUser";
import ListPengaduanUser from "./ListPengaduanUser";
import Home from "./Home";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/daftar" element={<Daftar />} />
      <Route path="/dashboard" element={<PengaduanUser />} />
      <Route path="/dashboard/kritik-saran" element={<KisarUser />} />
      <Route path="/dashboard/pengaduan" element={<ListPengaduanUser />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/list-kategori" element={<ListKategori />} />
      <Route path="/admin/pengaduan/:id" element={<Penanganan />} />
      <Route path="/admin/kritik-saran" element={<Kisar />} />
      <Route path="*" element={<h1>halaman tidak ditemukan</h1>} />
    </Routes>
  );
}

export default App;
