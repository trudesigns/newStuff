import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const NavWrapper = styled.nav`
  text-align: right;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;

    a {
      padding: 56px;
      text-decoration: none;
      color: white;
    }
  }
`

const Navbar = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Navbar
