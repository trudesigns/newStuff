import React from 'react'
import Link from 'gatsby-link'
import logo from './../images/logo.png'

// components
import Navbar from './navbar'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt={'logoImage'} />
        </Link>
      </h1>
      <Navbar />
    </div>
  </div>
)

export default Header
