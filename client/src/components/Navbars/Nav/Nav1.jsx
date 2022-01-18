import { FaChevronRight } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import Faballeynav from "../images/logo.png";
import Indya from "../images/indya.png";
export const Nav1 = () => {
    return <>
        <div className="w-full h-10 border border-blue-50 flex">
            <div className="w-2/6 border border-white text-xs font-bold flex mt-3">
                <span className="text-pink-600 ml-6">EOSS | UPTO 70% Off.</span>
                <span>Shop Now<FaChevronRight className="inline-block" /></span>
            </div>
            <div className="w-4/6 border border-white flex h-full justify-center">
                <img className="w-28" src={Faballeynav} alt="logo" />
                <img className="w-28" src={Indya} alt="Indya" />
            </div>
            <div className="w-2/6 border border-white">
                <div className="text-xs font-medium mt-2 float-right mr-6">
                    <p className="inline-block">Track Order | Gift Cards | Login | Sign up</p>
                    <MdCardTravel className="inline-block ml-2 text-xl" />
                </div>
            </div>
        </div>
    </>
}