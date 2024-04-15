import { IoMailOutline } from "react-icons/io5";
import { FaPhoneVolume, FaYoutube } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const InfoNavbar = () => {
    return (
        <div className="border-b py-2">
            <div className="flex max-w-[1000px] mx-auto">
                <div className="flex-1"></div>
                <div className="flex justify-between flex-1 text-base">
                    <div className="border-r pr-7 flex items-center gap-3"><IoMailOutline></IoMailOutline> jijetu2@gmail.com</div>
                    <div className="px-3 flex items-center gap-3"><FaPhoneVolume></FaPhoneVolume>
                        +880 1626140989</div>
                    <div className="border-l pl-7 flex gap-3">
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