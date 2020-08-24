import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="nav nav-tabs">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/heroCreator3e">Hero Creator 3e</Link>
        </nav>
    );
}
