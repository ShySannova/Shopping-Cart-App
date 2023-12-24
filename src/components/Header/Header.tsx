import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <Link to="/" className="header-logo">
                    <h1>QuickBill - Solutions</h1>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">Cart</NavLink>
                        </li>
                        <li>
                            <button>Logout</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
