import IsiMenu from "./IsiMenu";

const SideMenu = (props) => {
  const hideMenu = () => {
    const hideSideMenu = document.querySelector(".aside-bar");
    hideSideMenu.classList.add("-translate-x-full");
  };

  return (
    <div>
      <div className="aside-bar fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800">
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Menu
        </h5>
        <button
          onClick={hideMenu}
          type="button"
          className="hide-side-menu text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                onClick={() => props.getPengaduan("terkirim")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ion-icon name="archive" size="large"></ion-icon>
                <IsiMenu Isi="Pengaduan Masuk" />
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => props.getPengaduan("diproses")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ion-icon name="refresh-circle" size="large"></ion-icon>
                <IsiMenu Isi="Pengaduan Diproses" />
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => props.getPengaduan("selesai")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ion-icon name="checkmark-done-circle" size="large"></ion-icon>
                <IsiMenu Isi="Pengaduan Selesai" />
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => props.getPengaduan("ditolak")}
                className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ion-icon name="close-circle" size="large"></ion-icon>
                <IsiMenu Isi="Pengaduan Ditolak" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
