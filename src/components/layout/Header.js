import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>TodoList</h1>
            <Link className="header__link" to="/">Home</Link> | 
            <Link className="header__link" to="/about"> About</Link>
        </header>
    )
}

export default Header;