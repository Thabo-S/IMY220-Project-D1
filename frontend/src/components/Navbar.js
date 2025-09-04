import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem("currentUser");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        
        // Redirect to splash page
        navigate("/");
    };

    return (
        <div className="navbarContainer">
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/home">
                        <img src="/assets/images/logo.png" alt="Repo River Logo" className="navbar-logo" />
                    </Link>
                </div>
                <div className="navbar-links">
                    <Link
                        to="/home"
                        className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/discover"
                        className={`nav-link ${location.pathname === "/discover" ? "active" : ""}`}
                    >
                        Discover
                    </Link>
                    <button className="nav-link logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                    <Link
                        to="/profile"
                        className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}
                    >
                        <img
                            src="/assets/images/user-avatar.jpg"
                            alt="Profile"
                            className="profile-img"
                        />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;