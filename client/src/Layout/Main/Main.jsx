import { Outlet } from "react-router-dom";
import InfoNavbar from "../../components/InfoNavbar/InfoNavbar";
import Navbar from "../../components/Share/Navbar/Navbar";
import Footer from "../../components/Share/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className="absolute w-full z-10">
                <InfoNavbar></InfoNavbar>
                <div className="sticky top-0 z-20"><Navbar></Navbar></div>
                
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;