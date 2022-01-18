import Faballeynav2 from "../images/faballey2ndnavbar.png";
import { useState } from "react";
export const Nav1 = () => {
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
        <div className="w-full flex border border-blue-50 pt-2">
            <div className="flex justify-center">
                <img className="w-30 h-6 mt-2 ml-2" src={Faballeynav2}></img>
            </div>
            <div className="flex Lato',sans-serif font-semibold align-text-bottom mt-2">
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>NEW IN</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black" onMouseEnter={() => setShow2(true)} onMouseLeave={() => setShow2(false)}>THE EDIT</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black" onMouseEnter={() => setShow3(true)} onMouseLeave={() => setShow3(false)} > PARTY'21</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600" onMouseEnter={() => setShow4(true)} onMouseLeave={() => setShow4(false)}>CLOTHING</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">TOPS</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">DRESSES</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600">WINTER'21</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">LOUNGEWAR</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">LOOKBOOKS</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600">SALE</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-black">WFHEDIT</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600">2DRESSES AT Rs.1800</p>
                <p className="text-xs mx-1 px-2 py-3 hover:border-b-4 border-b-pink-600 text-pink-600">2TOPS AT rs.999</p>
                <input className="placeholder:italic w-20 h-6 mt-2 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
            </div>
        </div>
        {
            show ? <div className="w-full flex absolute bg-white">
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
            show2 ? <div className="w-full flex absolute bg-white">
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
            show3 ? <div className="w-full flex absolute bg-white">
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
            show4 ? <div className="w-full flex absolute bg-white pb-4">
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