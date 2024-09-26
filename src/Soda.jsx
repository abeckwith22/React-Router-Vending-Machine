import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div className="Soda">
            <h1>You selected soda!</h1>
            <img
                src="https://ekhareedari.com/wp-content/uploads/2020/05/1030273-1a.jpg"
                alt="A Nice Can of Coca-Cola"
            />
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Soda;
