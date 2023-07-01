import { BsArrowLeft } from "react-icons/bs";

const Profile = () => {
  return (
    <div id="profile" className="py-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-between" data-aos="fade-left">
          <div className="">
            <h1 className="font-medium text-5xl">Visi & Misi</h1>
            <p className="font-normal mt-3">
              Terwujudnya desa bulusan yang semakin hebat
              <br />
              berlandaskan pancasila dalam bingkai NKRI yang Ber-Bhineka Tunggal
              Ika
            </p>
            <button className="btn-secondary mt-5 flex items-center gap-x-3">
              Lihat selengkapnya
              <BsArrowLeft size={25} className="rotate-180" />
            </button>
          </div>
          <img
            src={"./images/image-profile.jpg"}
            width={500}
            className="rounded-xl"
            alt="image-profile"
          />
        </div>
        <div
          className="flex flex-row-reverse items-center justify-between mt-10"
          data-aos="fade-right"
        >
          <div className="">
            <h1 className="font-medium text-5xl">Sejarah</h1>
            <p className="font-normal mt-3">
              {" "}
              Sejarah kelurahan adalah kesatuan masyarakat hukum yang memiliki
              <br />
              batas-batas wilayah yang berwenang untuk mengatur dan mengurus
              masyarakat .
            </p>
            <button className="btn-secondary mt-5 flex items-center gap-x-3">
              Lihat selengkapnya
              <BsArrowLeft size={25} className="rotate-180" />
            </button>
          </div>
          <img
            src={"images/image-profile.jpg"}
            width={500}
            className="rounded-xl"
            alt="image-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
