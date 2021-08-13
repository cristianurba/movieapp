import React from "react";
import {Layout} from "antd";

import "./Footer.scss";

export default function Footer(){
    const {footer} = Layout;
    return (
        <Layout className="footer">
            <p>Cristian Ariza</p>
        </Layout>
    );
}