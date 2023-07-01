const Pelayanan = () => {
  return (
    <div
      id="pelayanan"
      className="bg-dark-blue flex items-center justify-center py-20"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-5xl">Pelayanan</h1>
            <p className="text-1xl text-white mt-2">
              Pelayanan yang tersedia di kelurahan bulusan pelayanan sosial dan
              pengaduan
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-5">
            <img
              src={"images/image-pelayanan.jpg"}
              className="rounded-xl"
              width={350}
              alt="image-card"
            />
            <img
              src={"images/image-pelayanan.jpg"}
              className="rounded-xl"
              width={350}
              alt="image-card"
            />
            <img
              src={"images/image-pelayanan.jpg"}
              className="rounded-xl"
              width={350}
              alt="image-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pelayanan;
