import Cards from "./Cards";
const DetailPel = (props) => {
    return (
        <div>
            <p className="font-medium text-xl p-1 ">Nama :{props.nama}</p>
            <p className="font-medium text-xl p-1">Kendala : {props.kendala}</p>
            <p className="font-medium text-xl p-1">Lokasi : {props.lokasi}</p>
        </div>
    );
}
 
export default DetailPel;