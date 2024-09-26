import React from "react";
import NavBar from "./NavBar";

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <h1>Welcome to the Vending Machine!</h1>
            <h3>Please Select an Item!</h3>
            <NavBar/>
            <img
                src="https://miro.medium.com/max/1200/1*6daVASIQ_gt916KRq2fWTA.jpeg"
                alt="Beautiful Vending Machine"
            />
        </div>
    );
};

export default VendingMachine;
