import { GiHealthPotion, GiCarWheel } from "react-icons/gi";
import { FaFileInvoiceDollar, FaOpencart } from "react-icons/fa";
import { LuRadioTower } from "react-icons/lu";
import { TbWorldDollar } from "react-icons/tb";
import { TbHome } from "react-icons/tb";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineMiscellaneousServices } from "react-icons/md";


const Services = () => {
    return (
        <div className="my-12">
            <h1 className="text-center text-6xl font-semibold mb-8"><span className="text-red-700">Industries</span> We Serve</h1>
            <div className="grid grid-cols-6 gap-8 max-w-[1000px] mx-auto">
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><FaFileInvoiceDollar></FaFileInvoiceDollar><span className="text-2xl">Fintech</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><GiHealthPotion></GiHealthPotion><span className="text-2xl">Healthcare</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><LuRadioTower></LuRadioTower><span className="text-2xl">Telco</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><FaOpencart ></FaOpencart ><span className="text-2xl">E-com</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><TbHome></TbHome><span className="text-2xl">Real Estate</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><GiCarWheel></GiCarWheel><span className="text-2xl">Automotive</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><GrCloudSoftware></GrCloudSoftware><span className="text-2xl">Software</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><MdOutlineRocketLaunch></MdOutlineRocketLaunch><span className="text-2xl">Startup</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><FaGraduationCap></FaGraduationCap><span className="text-2xl">Education</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><TiShoppingCart></TiShoppingCart><span className="text-2xl">Retail</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><TbWorldDollar></TbWorldDollar><span className="text-2xl">Non-Profit</span></div>
                <div className="text-center text-5xl font-medium flex flex-col gap-3 items-center"><MdOutlineMiscellaneousServices></MdOutlineMiscellaneousServices><span className="text-2xl">Miscellaneous</span></div>
            </div>
        </div>
    );
};

export default Services;