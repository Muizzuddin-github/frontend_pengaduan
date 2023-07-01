import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-dark-blue py-3.5 fixed w-full z-30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <img src={"images/logo.png"} width={150} alt="logo-image" />
          </div>
          <div className="flex items-center gap-x-5">
            <ul className="flex items-center gap-x-6 text-white">
              <li>
                <a href="#beranda">Beranda</a>
              </li>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#pelayanan">Pelayanan</a>
              </li>
              <li>
                <a href="#penanganan">Penanganan</a>
              </li>
            </ul>
            <Link to={`/login`} className="btn-primary">
              Login
            </Link>
            <Link to={`/daftar`} className="btn-secondary">
              Registrasi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
