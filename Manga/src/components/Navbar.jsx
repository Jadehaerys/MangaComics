import { Link } from "react-router-dom"

import "../css/Navbar.css"
function NavBar(){
    return(
        <header className="app-nav">
          <nav>
            <h1>Manga Comics</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
          </nav>
        </header>
    )
}

export default NavBar;