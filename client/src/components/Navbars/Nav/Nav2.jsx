import Faballeynav2 from "../images/faballey2ndnavbar.png";
import { FaSistrix } from "react-icons/fa";
import { useState } from "react";
export const Nav2 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const mouseEnter = () => {
        setShow(true);
    }
    const mouseLeave = () => {
        setShow(false);
    }
    return <>
        <div className="w-full flex border border-blue-50">
            <div className="flex justify-center">
                <img className="w-30 h-6 mt-2 ml-2" src={Faballeynav2}></img>
            </div>
            <div className="flex Lato',sans-serif font-semibold align-text-bottom mt-2">
                <div className="flex h-full">
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-black" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>NEW IN</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-black" onMouseEnter={() => setShow2(true)} onMouseLeave={() => setShow2(false)}>THE EDIT</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-black" onMouseEnter={() => setShow3(true)} onMouseLeave={() => setShow3(false)} > PARTY'21</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-pink-600" onMouseEnter={() => setShow4(true)} onMouseLeave={() => setShow4(false)}>CLOTHING</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-black">TOPS</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-black">DRESSES</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-pink-600">WINTER'21</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-black">LOUNGEWAR</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-black">LOOKBOOKS</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-pink-600">SALE</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-black">WFHEDIT</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-pink-600">2DRESSES AT ₹1800</a>
                    <a className="text-xs px-2 cursor-pointer py-3 hover:border-b-4 border-b-pink-600 text-pink-600">2TOPS AT ₹999</a>
                </div>
                <div className="flex w-44">
                    <span className="flex"><input className="placeholder:italic w-36 h-6 mt-2 sm:text-sm border border-black bg-gray-300 cursor-pointer" placeholder="Search" type="text" name="search" /><FaSistrix className="text-xl mt-3 float-right cursor-pointer" /></span>
                </div>
                <div className="flex h-6 mt-2">
                    <select className="border border-black text-base cursor-pointer">
                        <option value="inr">₹ INR</option>
                        <option value="usd">$ USD</option>
                        <option value="csd">$ CSD</option>
                        <option value="gbp">£ GBP</option>
                        <option value="aud">$ AUD</option>
                        <option value="sgd">$ SGD</option>
                        <option value="eur">€ EUR</option>
                    </select>
                </div>
            </div>
        </div>
        {
            show ? <div className="w-full flex absolute bg-white border-2 border-yellow-400 font-black" onMouseEnter={mouseEnter}>
                <div className="w-34 flex flex-col ml-48 text-left mt-4 Lato',sans-serif font-light text-sm align-text-bottom">
                    <a className="mt-2" href=""> Clothing</a>
                    <a className="mt-2" href=""> Curve</a>
                    <a className="mt-2" href=""> Accessories</a>
                    <a className="mt-2" href=""> Bestselling</a>
                </div>
                <div className="w-1/3 h-64 ml-44 mt-4">
                    <img className="w-full h-60" src="https://img.faballey.com/images/newindrpdnnv1.jpg" alt="New In" />
                </div>
            </div> : null
        }
        {
            show2 ? <div className="w-full flex absolute bg-white font-black" onMouseEnter={() => setShow2(true)} onMouseLeave={() => setShow2(false)}>
                <div className="w-34 flex flex-col ml-48 text-left mt-4 Lato',sans-serif font-light text-sm align-text-bottom">
                    <h2 className="font-bold text-base">TRENDS</h2>
                    <a className="mt-2" href=""> Florals</a>
                    <a className="mt-2" href=""> Checks</a>
                    <a className="mt-2" href=""> Pinks</a>
                    <a className="mt-2" href=""> Smoked Styles</a>
                    <a className="mt-2" href=""> Puff Sleeves</a>
                    <a className="mt-2" href=""> Pinks</a>
                    <a className="mt-2" href=""> Waist Cinchers</a>
                </div>
                <div className="w-34 flex flex-col ml-60 text-left mt-4 Lato',sans-serif font-light text-sm align-text-bottom">
                    <h2 className="">.</h2>
                    <a className="mt-2" href=""> Florals</a>
                    <a className="mt-2" href=""> Checks</a>
                    <a className="mt-2" href=""> Pinks</a>
                    <a className="mt-2" href=""> Smoked Styles</a>
                    <a className="mt-2" href=""> Puff Sleeves</a>
                    <a className="mt-2" href=""> Pinks</a>
                    <a className="mt-2" href=""> Waist Cinchers</a>
                </div>
                <div className="w-1/3 h-64 ml-44 mt-4">
                    <img className="w-48 h-40" src="https://img.faballey.com/images/inspirealygalupnv1.jpg" alt="New In" />
                </div>
            </div> : null
        }
        {
            show3 ? <div className="w-full flex absolute bg-white font-black" onMouseEnter={() => setShow3(true)} onMouseLeave={() => setShow3(false)}>
                <div className="w-34 flex flex-col ml-60 text-left mt-4 Lato',sans-serif font-light text-sm align-text-bottom">
                    <a className="mt-2" href=""> Lookbook</a>
                    <a className="mt-2" href=""> Collection</a>
                </div>
                <div className="w-1/3 h-64 ml-48 mt-4">
                    <img className="w-60 h-40" src="https://img.faballey.com/images/party-wear-2.jpg" alt="New In" />
                </div>
            </div> : null
        }
        {
            show4 ? <div className="w-full flex absolute bg-white pb-4 font-black" onMouseEnter={() => setShow4(true)} onMouseLeave={() => setShow4(false)}>
                <div className="w-34 flex flex-col ml-56 text-left mt-4 Lato',sans-serif font-light text-sm align-text-bottom">
                    <a className="mt-2" href=""> Tops</a>
                    <a className="mt-2" href=""> Dresses</a>
                    <a className="mt-2" href=""> Skirts</a>
                    <a className="mt-2" href=""> Buttoms</a>
                    <a className="mt-2" href=""> Jeans</a>
                    <a className="mt-2" href=""> Shrugs</a>
                    <a className="mt-2" href=""> Basics</a>
                    <a className="mt-2" href=""> Classics</a>
                    <a className="mt-2" href=""> Back To Work</a>
                    <h2 className="font-bold mt-2 text-sm">FALL'21</h2>
                    <h2 className="font-bold mt-2 text-sm">LOUNGEWEAR</h2>
                    <h2 className="font-bold mt-2 text-sm">WINTER WEAR</h2>
                </div>
                <div className="w-34 flex flex-col ml-40 text-left mt-4 Lato',sans-serif font-light text-sm align-text-bottom">
                    <h2 className="font-bold mt-2 text-sm">SHOP BY OCCASION</h2>
                    <a className="mt-2" href=""> Party</a>
                    <a className="mt-2" href=""> Vaction</a>
                    <a className="mt-2" href=""> Work</a>
                    <a className="mt-2" href=""> Loungwear</a>
                    <a className="mt-2" href=""> </a>
                    <h2 className="font-bold mt-2 text-sm">CURVE</h2>
                    <a className="mt-2" href=""> Tops</a>
                    <a className="mt-2" href=""> Dresses</a>
                </div>
                <div className="w-1/3 h-64 ml-28 mt-4">
                    <img className="w-48 h-72" src="https://img.faballey.com/images/clothingdrpdnnv1.jpg" alt="New In" />
                </div>
            </div> : null
        }
    </>
}