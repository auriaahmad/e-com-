import { Link, Routes, Route } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
    return (
        <div>
            <div className="container">
                <nav className="left_nav">
                    <div className="icon_nav_bar">
                        abc.com
                    </div>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/"  className="link">Contact</Link>
                    <Link to="/" className="link">Blog</Link>
                </nav>
                <nav className="right_nav">
                    <Link to="/signin" className="link">SignIn</Link>
                    <Link to="signup"  className="link">SignUp</Link>
                </nav>
            </div>
            
        </div>
    );
}

export default NavBar;