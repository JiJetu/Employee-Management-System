import { IoMailOutline } from "react-icons/io5";
import { FaPhoneVolume, FaYoutube } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const InfoNavbar = () => {
    return (
        <div className="border-b border-gray-400 text-white py-2 w-full">
            <div className="flex max-w-[1000px] mx-auto">
                <div className="flex-1"></div>
                <div className="flex justify-between flex-1 text-base">
                    <div className="border-r pr-7 flex items-center gap-3"><IoMailOutline></IoMailOutline> jijetu2@gmail.com</div>
                    <div className="px-3 flex items-center gap-3"><FaPhoneVolume></FaPhoneVolume>
                        +880 1626140989</div>
                    <div className="border-l pl-7 flex gap-4 text-lg">
                        <FaFacebookF></FaFacebookF>
                        <FaInstagram ></FaInstagram>
                        <FaYoutube></FaYoutube>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoNavbar;