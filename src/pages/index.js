import React from 'react'
import Link from 'gatsby-link'
import hero from './../images/aboutImage.jpg'
import memory from './../images/memorygame.jpg'

const IndexPage = () => (
  <div className="jumbotron">
    <a href="https://trudesignsmemorygame.netlify.com/ " target="_blank">
      <img src={memory} alt={'memoryImage'} alt="memory game image" />
    </a>
    <p className="lead">
      I design the assets and modifed the code to make it look and function the
      way I wanted for this memory game.I design interactive, cross-platform
      user experiences. Driven to discover, understand, and design for real
      human needs influenced by data and user research methods. I am
      enthusiastic about innovation and wish to use my experience to support
      emerging technologies and companies. I always seek to see the bigger
      picture, polish the details, and create simple solutions to complex
      problems.
    </p>
  </div>
)

export default IndexPage
