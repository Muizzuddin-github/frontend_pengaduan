import Login from "./Components/Login/Login";
import Daftar from "./Components/Daftar/Daftar";
import { Routes, Route } from "react-router-dom";
import PrivateRouteAdmin from "./Components/PrivateRouteAdmin";
import Dashboard from "./Dashboard";
import ListKategori from "./ListKategori";
import Penanganan from "./Penanganan";
import Kisar from "./Kisar";
import KisarUser from "./KisarUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>hello</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/kritik-saran" element={<KisarUser />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/list-kategori" element={<ListKategori />} />
      <Route path="/admin/pengaduan/:id" element={<Penanganan />} />
      <Route path="/admin/kritik-saran" element={<Kisar />} />
      <Route path="*" element={<h1>halaman tidak ditemukan</h1>} />
    </Routes>
  );
}

export default App;
