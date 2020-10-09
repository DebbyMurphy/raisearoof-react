import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";
// import Logo from "../components/Logo/Logo";

function Nav() {
    return (
        <nav>
            {/* <Link to ="/">{Logo}</Link> */}
            <Link id="nav-home" to ="/">Home</Link>
            <Link to ="#">How It Works</Link>
            <Link to ="#">Create Account</Link>
            <Link to ="/login">Login</Link>           
            <Link id="nav-makeapledge" to ="/case">Make a Pledge</Link>
        </nav>
    );
}

export default Nav;