import React from 'react'
import Link from 'gatsby-link'
import about from './../images/aboutImage.jpg'

import styled from 'styled-components'
import Navbar from './navbar'

const FooterWrapper = styled.nav`
  text-align: center;
`

const Footer = ({ siteTitle }) => {
  return (
    <FooterWrapper>
      <div style={{ background: 'pink', marginBottom: '1.45rem' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <a href="https://www.facebook.com/trudesigns.co/ " target="_blank">
            <i className="fab fa-facebook-f" style={{ color: 'white' }} />
          </a>

          <a href="https://www.instagram.com/trudesigns.co" target="_blank">
            <i className="fab fa-instagram" style={{ color: 'white' }} />
          </a>
          <a href="mailto:trudesigns@me.com" target="_self">
            <i className="far fa-envelope" style={{ color: 'white' }} />
          </a>

          <p>Copyright © 2018 Tru Designs. All rights reserved.</p>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
