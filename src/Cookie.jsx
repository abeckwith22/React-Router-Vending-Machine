import React from "react";
import { Link } from "react-router-dom";

const Cookie = () => {
    return (
        <div className="cookie">
            <h1>You selected Cookies!</h1>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg"
                alt="2 Delicious Homemade cookies"
            />
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Cookie;
