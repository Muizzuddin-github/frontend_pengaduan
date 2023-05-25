import { Link } from "react-router-dom";

const PopUpKonfir = (props) => {
  const batalTolak = () => {
    const batalTolak = document.querySelector(".popup-tolak");
    batalTolak.classList.add("hidden");
  };
  return (
    <div
      tabIndex={-1}
      className="popup-tolak hidden left-0 right-0 top-0 bottom-0 fixed "
    >
      <div className="flex items-center justify-center">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[500px]">
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah Anda Yakin?
            </h3>
            <div className="flex justify-around">
              <Link to={`/admin/pengaduan/${props.id}`}>
                <button
                  type="button"
                  className=" text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-8 py-2.5 text-center mr-2"
                >
                  Ya
                </button>
              </Link>
              <button
                onClick={batalTolak}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-8 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpKonfir;
