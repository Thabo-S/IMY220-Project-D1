// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <span>Repo River</span>
//             </div>
//             <div className="navbar-links">
//                 <Link to="/" className="nav-link">Splash</Link>
//                 <Link to="/home" className="nav-link">Home</Link>
//                 <Link to="/profile" className="nav-link">Profile</Link>
//                 <Link to="/project" className="nav-link">Project</Link>
//                 <Link to="/login" className="nav-link login-btn">Login</Link>
//                 <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// components/Navbar.js

//works kinda
// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//     const location = useLocation();


//     if (location.pathname === "/" || location.pathname === "/splash") {
//         return null;
//     }

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <Link to="/home">
//                     <img src="/assets/images/logo.png" alt="Repo River Logo" className="navbar-logo" />
//                     <span>Repo River</span>
//                 </Link>
//             </div>
//             <div className="navbar-links">
//                 <Link to="/home" className="nav-link">Home</Link>
//                 <Link to="/profile" className="nav-link">Profile</Link>
//                 <Link to="/project" className="nav-link">Project</Link>
//                 <Link to="/login" className="nav-link login-btn">Login</Link>
//                 <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//     const location = useLocation();

//     // Don't show navbar on splash page
//     if (location.pathname === "/" || location.pathname === "/splash") {
//         return null;
//     }

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <Link to="/home">
//                     <img src="/assets/images/logo.png" alt="Repo River Logo" className="navbar-logo" />

//                 </Link>
//             </div>
//             <div className="navbar-links">
//                 <Link 
//                     to="/home" 
//                     className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
//                 >
//                     Home
//                 </Link>
//                 <Link 
//                     to="/profile" 
//                     className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}
//                 >
//                     Profile
//                 </Link>
//                 <Link 
//                     to="/project" 
//                     className={`nav-link ${location.pathname === "/project" ? "active" : ""}`}
//                 >
//                     Project
//                 </Link>
//                 <div className="navbar-auth">
//                     <Link to="/login" className="nav-link login-btn">Login</Link>
//                     <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// components/Navbar.js
// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//     const location = useLocation();


//     return (
//         <div className="navbarContainer">
//             <nav className="navbar">
//                 <div className="navbar-brand">
//                     <Link to="/home">
//                         <img src="/assets/images/logo.png" alt="Repo River Logo" className="navbar-logo" />

//                     </Link>
//                 </div>
//                 <div className="navbar-links">
//                     <Link
//                         to="/home"
//                         className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
//                     >
//                         Home
//                     </Link>
//                     <Link
//                         to="/projects"
//                         className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
//                     >
//                         Projects
//                     </Link>
//                     <Link
//                         to="/profile"
//                         className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}
//                     >
//                         <img
//                             src="/assets/images/user-avatar.jpg"
//                             alt="Profile"
//                             className="profile-img"
//                         />
//                     </Link>

//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;

// components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

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
                        to="/discover"  // Changed from "/projects" to "/discover"
                        className={`nav-link ${location.pathname === "/discover" ? "active" : ""}`}
                    >
                        Discover
                    </Link>
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