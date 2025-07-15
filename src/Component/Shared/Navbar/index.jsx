import React from 'react'
import './styles.css';

const Navbar = () => {
    return (
        <header className="navbar">
        <h1 className="logo">TIME-CAPSULE</h1>
        <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/contact">Contact us</a>
            <a href="/about">About us</a>
        </nav>
        </header>
    )
}

export default Navbar