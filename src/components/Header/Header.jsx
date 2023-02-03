import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1 className="site-title">Brawl Minus Data</h1>
            <nav className="navigation">
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/attributes">Attributes</Link>
                <Link className="nav-item" to="/credits">Credits</Link>
            </nav>
        </div>
    )
}

export default Header;