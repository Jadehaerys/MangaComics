import { Link } from "react-router-dom";

import "../css/navbar.css"
function NavBar(){
    return(
        <nav>
            <h1>Manga Comics</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar;