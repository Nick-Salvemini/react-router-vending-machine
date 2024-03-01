import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <>
            <h1>Hi, I am a Vending Machine! Please Select A Snack</h1>
            <div>
                <h2><Link to="/kettle_chips">Kettle Chips</Link></h2>
                <h2><Link to="/snickers">Snickers</Link></h2>
                <h2><Link to="/reeses">Reeses</Link></h2>
            </div>
        </>

    );
}

export default VendingMachine;