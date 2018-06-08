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
      &:hover {
        color: gray;
      }
    }
  }
`

const Navbar = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/">Web</Link>
        </li>
        <li>
          <Link to="/branding">Branding</Link>
        </li>
        <li>
          <Link to="/mobile">Mobile</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Navbar
