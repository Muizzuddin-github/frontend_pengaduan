import Navigasi from "./Components/Menu/Navigasi";
import { useState } from "react";

const Penanganan = () => {
  const [img, setImg] = useState(null);
  const [jenisPengaduan, setJenisPengaduan] = useState("setuju");
  const [imgUpload, setImgUpload] = useState(null);
  const [deskripsi, setDeskripsi] = useState("");
  const [errNotUploadImg, setErrNotUploadImg] = useState(false);

  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setImgUpload(e.target.files[0]);
      setErrNotUploadImg(false);
    }
  };

  const handlePenanganan = async (e) => {
    try {
      e.preventDefault();
      if (!imgUpload) {
        setErrNotUploadImg(true);
        return;
      }

      alert(jenisPengaduan + deskripsi);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navigasi />

      <div className="py-10  flex justify-center">
        <div className="p-8 flex mx-2 border">
          <figure className="w-56 mr-2">
            <img
              className="w-full"
              src="https://cdn.gramedia.com/uploads/items/9786020523316_Melangkah_UV_Spot_R4-1.jpg"
              alt=""
            />
          </figure>
          <div className="w-80 h-[25.7rem] flex flex-col ml-2">
            <div className="p-2">
              <h1 className="text-xl">Dari : nama user</h1>
              <p className="text-sm">kategori</p>
              <p className="text-sm">tanggal</p>
              <hr className="mt-2 border" />
            </div>
            <div className="-mt-2 p-2 h-full">
              <p className="mb-2">deskripsi</p>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                nobis corporis provident doloribus officia id voluptatem
                delectus sequi esse alias. Ducimus omnis tenetur cum quisquam,
                sunt quis id aperiam possimus, voluptates dignissimos provident
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 mx-2">
          <h1 className="font-bold">Tangani pengaduan</h1>

          <form
            className="border mt-4 p-2 shadow-sm"
            onSubmit={handlePenanganan}
          >
            {img ? (
              <img src={img} alt="" className="w-40 rounded-md mb-2" />
            ) : (
              ""
            )}
            <div className="py-2">
              <label
                htmlFor="img"
                className="cursor-pointer bg-blue-500 text-white py-1 px-4 rounded-sm text-sm"
              >
                upload foto
              </label>
              {errNotUploadImg ? (
                <p className="inline-block ml-2 text-sm text-red-600">
                  butuh gambar
                </p>
              ) : (
                ""
              )}
              <input
                type="file"
                id="img"
                className="hidden"
                onChange={handleUpload}
              />
            </div>
            <div className="my-1">
              <div className="text-sm">
                <label htmlFor="setuju">setuju</label>
                <input
                  type="radio"
                  id="setuju"
                  name="jenis-penanganan"
                  checked
                  className="ml-2"
                  onChange={() => setJenisPengaduan("setuju")}
                />
              </div>
              <div className="text-sm mt-1">
                <label htmlFor="tolak">tolak</label>
                <input
                  type="radio"
                  id="tolak"
                  name="jenis-penanganan"
                  className="ml-3.5"
                  onChange={() => setJenisPengaduan("tolak")}
                />
              </div>
            </div>
            <div className="py-2">
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder="masukkan deskripsi"
                className="text-sm"
                onChange={(e) => setDeskripsi(e.target.value)}
                required
              ></textarea>
            </div>
            <button className="py-1 px-4 bg-blue-500 text-white rounded-md">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Penanganan;
