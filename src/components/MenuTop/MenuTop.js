import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/img/logo.svg";

import "./MenuTop.scss";

export default function MenuTop(){
    return (
        <div className="menu-top">
            <div className="menu-top__logo">
                <Logo />
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
            >
                <Menu.Item key="1">
                    <Link to="/movieapp">Home</Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to="/movieapp/new-movies">Últimos lanzamientos</Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Link to="/movieapp/popular-movies">Populares</Link>
                </Menu.Item>

                <Menu.Item key="4">
                    <Link to="/movieapp/search">Buscar</Link>
                </Menu.Item>
            </Menu>
        </div>
        
    )
}