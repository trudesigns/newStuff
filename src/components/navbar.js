import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </nav>
    )
}

export default Navbar
