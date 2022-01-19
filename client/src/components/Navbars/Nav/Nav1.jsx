import { FaChevronRight } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import Faballeynav from "../images/logo.png";
import Indya from "../images/indya.png";
import 'antd/dist/antd.min.css';
import { Input } from "antd";
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

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
                    <p className="inline-block cursor-pointer">Track Order | Gift Cards | <span onClick={showModal}>Login</span> | <span onClick={showModal}>Sign up</span></p>
                    <MdCardTravel className="inline-block ml-2 text-xl cursor-pointer" />
                </div>
            </div>
        </div>
        <Modal title="LOGIN OR SIGNUP" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelButtonProps={{ style: { display: 'none' } }} okButtonProps={{ style: { display: 'none' } }}>
            <div className="w-full border border-yellow-400 py-8">
                <div className="w-9/12 ml-2">
                    <label>for a quicker checkout</label>
                    <input className="px-36 py-4 border border-slate-400" placeholder="Enter Mobile/Email"></input>
                    <button className="px-48 py-4 bg-pink-600 mt-4"><span className="font-bold text-white">CONTINUE</span></button>
                    <h5>--------------Or continue with-------------------</h5>
                </div>
            </div>
        </Modal>
    </>
}