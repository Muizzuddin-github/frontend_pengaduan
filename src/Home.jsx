import Navbar from "./Components/Home/Navbar";
import Beranda from "./Components/Home/Beranda";
import Profile from "./Components/Home/Profile";
import Pelayanan from "./Components/Home/Pelayanan";
import Footer from "./Components/Home/Footer";
import ListPenanganan from "./Components/Home/ListPenanganan";

import { useEffect } from "react";

const Home = () => {
  useEffect(function () {
    document.title = "Kelurahan Bulusan";
  }, []);

  return (
    <>
      <Navbar />
      <Beranda />
      <Profile />
      <Pelayanan />
      <ListPenanganan />
      <Footer />
    </>
  );
};

export default Home;
