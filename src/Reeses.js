import { Link } from "react-router-dom";

function Reeses() {
    return (
        <>
            <h1>You Have Selected a Reese's Peanut Butter Cup! Great Choice!</h1>
            <div>
                <h2><Link to="/">Back to the Vending Machine</Link></h2>
            </div>
        </>
    );
}

export default Reeses;