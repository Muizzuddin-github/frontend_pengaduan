import Login from "./Components/Login/Login";

import Daftar from "./Components/Daftar/Daftar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ListKategori from "./ListKategori";
import Penanganan from "./Penanganan";
import Kisar from "./Kisar";
import KisarUser from "./KisarUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1 className="text-7xl text-center font-bold">Belum Ada 😁😅</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/daftar" element={<Daftar />} />
      <Route path="/dashboard" element={<h1>menunggu design</h1>} />
      <Route path="/dashboard/kritik-saran" element={<KisarUser />} />
      <Route
        path="/dashboard/kritik-saran"
        element={<h1>daftar pengaduan saya</h1>}
      />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/list-kategori" element={<ListKategori />} />
      <Route path="/admin/pengaduan/:id" element={<Penanganan />} />
      <Route path="/admin/kritik-saran" element={<Kisar />} />
      <Route path="*" element={<h1>halaman tidak ditemukan</h1>} />
    </Routes>
  );
}

export default App;
