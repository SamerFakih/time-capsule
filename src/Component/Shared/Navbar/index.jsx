import React from 'react'
import './styles.css';

const Navbar = () => {
    return (
        <header className="navbar">
        <h1 className="logo">TIME-CAPSULE</h1>
        <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/user">Capsule</a>
            <a href="/public">Public</a>
        </nav>
        </header>
    )
}

export default Navbar