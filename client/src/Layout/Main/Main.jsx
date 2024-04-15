import { Outlet } from "react-router-dom";
import InfoNavbar from "../../components/InfoNavbar/InfoNavbar";
import Navbar from "../../components/Share/Navbar/Navbar";
import Footer from "../../components/Share/Footer/Footer";

const Main = () => {
    return (
        <div>
            <InfoNavbar></InfoNavbar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;