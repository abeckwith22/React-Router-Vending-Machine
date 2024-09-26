import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            {/* <Link to="/">Home</Link> */}
            <Link to="/cookies">Cookies</Link>
            <Link to="/chips">Chips</Link>
            <Link to="/soda">Soda</Link>
        </nav>
    );
}

export default NavBar;