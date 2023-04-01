import IconProfile from "../Login/IconProfile";
import FormDaftar from "./FormDaftar";

const daftar = () => {
    return (
        <div>
            <section className="bg-green-400 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">  
                <IconProfile/>
                <div className="border-2 border-white w-full bg-slate-300  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-8 space-y-4 md:space-y-6 sm:p-8">
                        <FormDaftar/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
 
export default daftar;