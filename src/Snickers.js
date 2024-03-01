import { Link } from "react-router-dom";

function Snickers() {
    return (
        <>
            <h1>You Have Selected a Snickers! Great Choice!</h1>
            <div>
                <h2><Link to="/">Back to the Vending Machine</Link></h2>
            </div>
        </>
    );
}

export default Snickers;