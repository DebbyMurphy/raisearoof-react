import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <Link to ="/">Home</Link>
            <Link to ="/case">Case</Link>
            <Link to ="/login">Login</Link>
        </nav>
    );
}

export default Nav;