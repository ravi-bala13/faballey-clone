import 'antd/dist/antd.min.css';
// import React, { Component } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export const Navbar = () => {

    return <>
        <Menu mode="horizontal">
            <Menu.Item key="mail">
                <SubMenu title={<p>NEW IN</p>}>
                    <div style={{ display: "flex", width: "100%", height: "300px", justifyContent: "space-between" }}>
                        <div style={{ marginLeft: "200px" }}>
                            <MenuItemGroup title="" style={{ width: "500px" }}>
                                <Menu.Item key="setting:1">Clothing</Menu.Item>
                                <Menu.Item key="setting:2">Curve</Menu.Item>
                                <Menu.Item key="setting:3">Accessories</Menu.Item>
                                <Menu.Item key="setting:4">Bestselling</Menu.Item>
                            </MenuItemGroup>
                        </div>
                        <div><img src='https://img.faballey.com/images/newindrpdnnv1.jpg' alt='img' style={{ paddingRight: "100px" }} /></div>
                    </div>

                </SubMenu>
            </Menu.Item>
            <SubMenu title={<p>THE EDIT</p>}>
                <div style={{ display: "flex", width: "full", height: "350px", justifyContent: "space-between" }}>
                    <div style={{ width: "600px" }}>
                        <MenuItemGroup title="TRENDS">
                            <Menu.Item key="setting:1">Florals</Menu.Item>
                            <Menu.Item key="setting:2">Checks</Menu.Item>
                            <Menu.Item key="setting:3">Pinks</Menu.Item>
                            <Menu.Item key="setting:4">Smoked Styles</Menu.Item>
                            <Menu.Item key="setting:5">Puff Sleeves</Menu.Item>
                            <Menu.Item key="setting:6">Waist Cinchers</Menu.Item>
                        </MenuItemGroup>
                    </div>
                    <div style={{ width: "600px" }}>
                        <MenuItemGroup title=".">
                            <Menu.Item key="setting:7">Ruffles & Tiers</Menu.Item>
                            <Menu.Item key="setting:8">Polka Dots</Menu.Item>
                            <Menu.Item key="setting:9">Strips</Menu.Item>
                            <Menu.Item key="setting:10">Pastels</Menu.Item>
                            <Menu.Item key="setting:11">Yellows</Menu.Item>
                            <Menu.Item key="setting:12">Jewel Tones</Menu.Item>
                        </MenuItemGroup>
                    </div>
                    <div style={{ width: "600px" }}><img style={{ marginTop: "50px" }} src='https://img.faballey.com/images/inspirealygalupnv1.jpg' alt='img' /></div>
                </div>
            </SubMenu>
            <Menu.Item key="alipay">
                <a href="">Contact Us</a>
            </Menu.Item>
        </Menu>
    </>
}
