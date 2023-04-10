import { useState } from "react"

const AddKomentar = (props) => {
    const [kritik,setKritik] = useState("")
    const [saran,setSaran] = useState("")

    const submit = (e) => {
        e.preventDefault()
        const lastKomentar = props.komentar[props.komentar.length - 1]
        const newKomentar = {
            id : lastKomentar.id + 1,
            kritik : kritik,
            saran : saran
        }
        props.setKomentar([...props.komentar,newKomentar])

        const formKomentar = e.target
        const addForm = formKomentar.parentElement.parentElement
        addForm.classList.remove("flex")
        addForm.classList.add("hidden")
        formKomentar.reset()
    }

    const tutup = (e) => {
        const form = e.target.parentElement.parentElement
        const addForm = form.parentElement
        
        addForm.parentElement.classList.remove("flex")
        addForm.parentElement.classList.add("hidden")
        form.reset()

    }

    return ( 
        <div className="layar-hitam form-komentar h-[100vh] w-full fixed hidden z-10 justify-center items-center">
            <div className="w-96 bg-gray-900 rounded-md shadow-km m-3 flex flex-col">    
                <form onSubmit={submit} className="px-4 py-4">
                    <h1 className="text-white text-center mb-5">Masukkan kritik dan saran anda</h1>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kritik</label>
                        <textarea type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="masukkan kritik" required onChange={(e) => setKritik(e.target.value)}></textarea>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Saran</label>
                        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="masukkan saran" required onChange={(e) => setSaran(e.target.value)}></textarea>
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={tutup}>tutup</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default AddKomentar;