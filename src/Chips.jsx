import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    return (
        <div className="Chips">
            <h1>You selected chips!</h1>
            <img
                src="https://i5.walmartimages.com/asr/32134784-6342-4049-8096-bdf67b79b330_1.195c70f05363988a9df7c0051f526179.jpeg"
                alt="Baked Lays Potato Chips"
            />
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Chips;
