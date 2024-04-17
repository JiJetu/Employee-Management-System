import { Outlet, useLocation } from "react-router-dom";
import InfoNavbar from "../../components/InfoNavbar/InfoNavbar";
import Navbar from "../../components/Share/Navbar/Navbar";
import Footer from "../../components/Share/Footer/Footer";

const Main = () => {
    const location = useLocation();

    const noHeaderFooter  = location.pathname.includes('login') || location.pathname.includes('signUp')
    
    return (
        <div>
            {
                noHeaderFooter || <div className="absolute w-full z-10">
                    <InfoNavbar></InfoNavbar>
                    <Navbar></Navbar>
                </div>
            }
            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }   
        </div>
    );
};

export default Main;