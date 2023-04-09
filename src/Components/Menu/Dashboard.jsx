import CardMasuk from "../../CardsMasuk";
import SideMenu from "./SideMenu";
import Navigasi from "./Navigasi";
import CardDiproses from "../../CardsDiproses";
const Dashboard = () => {
    return (
        <div>
            <div>
                <div className="text-right">
                    <Navigasi/>
                </div>
                    <SideMenu/>
            </div>
            <div className="isiNya">
                <div className="card-masuk">
                    <CardMasuk/>
                </div>
                <div className="card-diproses">
                    <CardDiproses/>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;