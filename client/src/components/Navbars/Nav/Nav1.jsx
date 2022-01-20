import { FaChevronRight } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import Faballeynav from "../images/logo.png";
import Indya from "../images/indya.png";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";

export const Nav1 = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <div className="w-full h-10 border border-blue-50 flex">
                <div className="w-2/6 border border-white text-xs font-bold flex mt-3">
                    <span className="text-pink-600 ml-6">EOSS | UPTO 70% Off.</span>
                    <span>
                        Shop Now
                        <FaChevronRight className="inline-block" />
                    </span>
                </div>
                <div className="w-4/6 border border-white flex h-full justify-center">
                    <img className="w-28" src={Faballeynav} alt="logo" />
                    <img className="w-28" src={Indya} alt="Indya" />
                </div>
                <div className="w-2/6 border border-white">
                    <div className="text-xs font-medium mt-2 float-right mr-6">
                        <p className="inline-block cursor-pointer">
                            Track Order | Gift Cards | <span onClick={showModal}>Login</span>{" "}
                            | <span onClick={showModal}>Sign up</span>
                        </p>
                        <Link to={"/checkout/cart"}>
                            {" "}
                            <MdCardTravel className="inline-block ml-2 text-xl cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>
            <Modal
                title="LOGIN OR SIGNUP"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: "none" } }}
                okButtonProps={{ style: { display: "none" } }}
            >
                <div className="w-full py-8">
                    <div className="w-11/12 ml-2">
                        <label>
                            <h4 className="font-bold">for a quicker checkout</h4>
                        </label>
                        <input
                            className="w-full py-4 border border-slate-400 mt-4 placeholder:align-baseline"
                            placeholder="Enter Mobile/Email"
                        ></input>
                        <div className="w-full justify-center align-middle mt-4 bg-pink-600 cursor-pointer">
                            <div className="w-24 m-auto py-3 bg-pink-600">
                                <h4 className="text-white font-bold">CONTINUE</h4>
                            </div>
                        </div>
                        <div className="w-full justify-center ml-16 mt-4">
                            <h5 className="inline-block ml-28">Or continue with</h5>
                        </div>
                        <div className="w-2/6 border border-white">
                            <div className="text-xs font-medium mt-2 float-right mr-6">
                                <p className="inline-block cursor-pointer">Track Order | Gift Cards | <span onClick={showModal}>Login</span> | <span onClick={showModal}>Sign up</span></p>
                                <a href="/checkout/cart"><MdCardTravel className="inline-block ml-2 text-xl cursor-pointer" /></a>
                            </div>
                            <div className="w-full flex justify-evenly mt-4">
                                <div className="w-5/12">
                                    <img
                                        className="cursor-pointer"
                                        src="https://www.faballey.com/images/loginfb.png"
                                        alt=""
                                    />
                                </div>
                                <div className="w-5/12">
                                    <img
                                        className="cursor-pointer"
                                        src="https://www.faballey.com/images/logingogl.png"
                                        alt="google"
                                    />
                                </div>
                            </div>
                            <h5
                                className="inline-block ml-52 mt-6 cursor-pointer"
                                onClick={() => setIsModalVisible(false)}
                            >
                                skip
                            </h5>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
