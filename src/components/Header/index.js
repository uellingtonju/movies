import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <header className="topo">
            <Link to="/">
                <span>LinkFlix</span>
            </Link>
            <nav>
               <Link to="/">Home</Link>

               <Link to="/watch">Assistir</Link>
            </nav>
        </header>
    )
}

export default Header;