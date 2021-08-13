import React from "react";
import {Link} from "react-router-dom";

import "./error404.scss";

export default function Error404(){
    return (
        <div className="error404">
            <h1>Error 404</h1>
            <h2>Algo raro ha pasado</h2>
            <Link to="/movieapp">
                <h3>Pero si pinchas aquí puedes volver al inicio ;)</h3>
            </Link>
        </div>
    );
}