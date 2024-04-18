// Navbar.js

import React from 'react';
import './navbar.css'; // Import custom CSS file for styling

function Navbar() {
    return (
        <nav className="navbar" style={{backgroundColor:'blue'}}>
            <div className="container">
                <div className="logo">
                    <a href=" ">Logo</a>
                </div>
                <ul className="nav-links">
                    <li><a href=" ">Home</a></li>
                    <li><a href=" ">About</a></li>
                    <li><a href=" ">Services</a></li>
                    <li><a href=" ">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
