import { Link } from "react-router-dom";

function KettleChips() {
    return (
        <>
            <h1>You Have Selected Kettle Chips! Great Choice!</h1>
            <div>
                <h2><Link to="/">Back to the Vending Machine</Link></h2>
            </div>
        </>
    );
}

export default KettleChips;