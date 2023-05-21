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
      <Route path="/admin" element={<PrivateRouteAdmin />}>
        <Route path="" element={<Dashboard />} />
        <Route path="list-kategori" element={<ListKategori />} />
        <Route path="list-kategori/:id" element={<Penanganan />} />
        <Route path="kritik-saran" element={<Kisar />} />
      </Route>
      <Route path="*" element={<h1>halaman tidak ditemukan</h1>} />
    </Routes>
  );
}

export default App;
