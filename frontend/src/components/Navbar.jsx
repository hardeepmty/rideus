import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    src="/images/logo.jpg"
                    alt="Certify Logo"
                    className="navbar-logo"
                />
            </div>

            <div
                className="navbar-toggle"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <span className="navbar-toggle-bar"></span>
                <span className="navbar-toggle-bar"></span>
                <span className="navbar-toggle-bar"></span>
            </div>

            <div className={`navbar-right ${isMenuOpen ? 'visible' : ''}`}>
                <a href="/about" className="navbar-link" style={{fontFamily:"Montserrat" ,fontSize:"15px", fontWeight:"500"}}>Home</a>
                <a href="/product" className="navbar-link" style={{fontFamily:"Montserrat",fontSize:"15px", fontWeight:"500"}}>About Us</a>
                <a href="/help" className="navbar-link" style={{fontFamily:"Montserrat",fontSize:"15px", fontWeight:"500"}}>My Bookings</a>
                <a href="/help" className="navbar-link" style={{fontFamily:"Montserrat",fontSize:"15px", fontWeight:"500"}}>Contact Us</a>            </div>
        </nav>
    );
};

export default Navbar;