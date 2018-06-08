import React from 'react'
import Link from 'gatsby-link'
import about from './../images/aboutImage.jpg'

import styled from 'styled-components'
import Navbar from './navbar'

const FooterWrapper = styled.nav`
  text-align: center;

  i {
    color: white;
    padding: 56px;
    font-size: 30px;
    &:hover {
      color: #f28fc5;
    }
  }
`

const Footer = ({ siteTitle }) => {
  return (
    <FooterWrapper>
      <div style={{ background: 'gray', marginBottom: '1.45rem' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <a href="https://www.facebook.com/trudesigns.co/ " target="_blank">
            <i className="fab fa-facebook-f" />
          </a>

          <a href="https://www.instagram.com/trudesigns.co" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="mailto:trudesigns@me.com" target="_self">
            <i className="far fa-envelope" />
          </a>

          <p>Copyright © 2018 Tru Designs. All rights reserved.</p>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
