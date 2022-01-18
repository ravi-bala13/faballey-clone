import Faballeynav2 from "../images/faballey2ndnavbar.png";
import { IconButton } from '@chakra-ui/react'
import { useState } from "react";
export const Navbar = () => {
    const [show, setShow] = useState(false);
    const mouseEnter = () => {
        setShow(true);
    }
    const mouseLeave = () => {
        setShow(false);
    }
    return <>
        <div className="w-full flex border border-blue-50 pt-2">
            <div className="flex justify-center">
                <img className="w-30 h-6 mt-2 ml-2" src={Faballeynav2}></img>
            </div>
            <div className="flex Lato',sans-serif font-semibold align-text-bottom mt-2">
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>NEW IN</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">THE EDIT</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">PARTY'21</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600">CLOTHING</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">TOPS</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">DRESSES</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600">WINTER'21</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">LOUNGEWAR</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">LOOKBOOKS</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600">SALE</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">WFHEDIT</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600">2DRESSES AT Rs.1800</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600">2TOPS AT rs.999</p>
                <input class="placeholder:italic w-20 h-6 mt-2 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
            </div>
        </div>
        {show ? <div className="w-full flex absolute">
            <div className="w-34 flex flex-col ml-48 text-left mt-4 Lato',sans-serif font-light text-sm align-text-bottom">
                <a href="">Clothing</a>
                <a href="">Curve</a>
                <a href="">Accessories</a>
                <a href="">Bestselling</a>
            </div>
            <div className="w-1/3 h-64 ml-44 mt-4">
                <img className="w-full h-60" src="https://img.faballey.com/images/newindrpdnnv1.jpg" alt="New In" />
            </div>
        </div> : null}
        <h1>Hello</h1>

    </>
}