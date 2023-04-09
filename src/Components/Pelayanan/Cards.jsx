import DetailPel from "./DetailPel";
import ButtonCards from "./ButtonCards";
const Cards = (props) => {
    return (
        <div className="p-6 ">
            <div className="w-[60%] mx-auto shadow-lg">
                <div className="relative m-0 flex bg-white p-4 rounded-md">
                    <div className="flex-no-shrink">
                        <img alt className="w-[400px] h-64 block mx-auto" src="../../../public/www.jpg" />
                    </div>
                    <div className="flex-1 card-block relative">
                        <div className="p-6">
                            <DetailPel
                            nama={props.nama}
                            kendala={props.kendala}
                            lokasi={props.lokasi}
                            />
                            <div className="flex mt-14 btn-cards">
                                <div className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <ButtonCards btn1='Terima'/>
                                </div>
                                <div className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                    <ButtonCards btn2='Tolak'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Cards;