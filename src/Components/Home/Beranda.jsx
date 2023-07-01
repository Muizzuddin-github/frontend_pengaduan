const Beranda = () => {
  return (
    <div
      id="beranda"
      className="relative min-h-screen bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(../images/image-background.jpg)` }}
    >
      <div className="absolute bg-black w-full h-screen bg-opacity-50 top-0 left-0"></div>
      <div className="absolute">
        <h1 className="text-6xl text-white font-bold text-center">
          Selamat Datang di Kelurahan Bulusan
        </h1>
        <p className="text-white text-center text-lg w-2/3 mx-auto mt-3 font-normal">
          Kelurahan Bulusan adalah kelurahan di kecamatan Kalipuro, Kabupaten
          Banyuwangi, Jawa Timur, Indonesia. Di kelurahan ini terdapat tempat
          pembuangan akhir untuk sampah.{" "}
        </p>
      </div>
    </div>
  );
};

export default Beranda;
