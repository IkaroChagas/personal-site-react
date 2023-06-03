import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
    return (
        <nav>
            <ul>
                <li className="barButton"><Link to="/">Curriculo</Link></li>
                <li className="barButton"><Link to="/portfolio">Portfolio</Link></li>
                <li className="barButton"><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;