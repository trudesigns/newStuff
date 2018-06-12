import React from 'react'
import app from './../images/app.jpg'
import phoneapp from './../images/phoneApp.jpg'
import watch from './../images/watch.jpg'

const MobilePage = () => (
  <ul className="list-unstyled">
    <li className="media">
      <img
        src={app}
        width={692}
        alt={'appImage'}
        alt="this is trudesigns logo"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">iCare app</h5>
        iCare app is an application for parents to have safe communication with
        their child through their mobile phone app and the child's wearable
        device.
      </div>
    </li>
    <li className="media my-4">
      <a href="https://marvelapp.com/400b8g8/screen/38750642 " target="_blank">
        Visit Mobile Interactive App
        <img
          src={phoneapp}
          width={292}
          alt={'phoneImage'}
          alt="this is a phone app"
        />
      </a>
      <div className="media-body">
        <h5 className="mt-0 mb-1">Use Case Scenario With Parent</h5>
        Mother: It was a Monday afternoon and Elisa is at work and her daughter
        Makayla is attending grade school. The area in which they reside in just
        experienced a major earthquake. Elisa immedatly reaches for her phone to
        video with chat her daughter on her wearable device to make sure she is
        safe. Makayla is happy to hear from her mother for she is scared to
        experience her first earthquake. The children had to evacuate the school
        building and Elisa uses the GPS tracker to locate her daughter and picks
        her up safetly.{' '}
        <p>
          Use Case: Parent to Child <br />
          <br />Primary user: Safe reliable communication device Goal in<br />
          <br />Context: Parent tracks child location and communicates to child
          wearable. <br />
          <br />Scope: Video, call, messaging, and GPS tracker <br />
          <br />Trigger: Parent and or child experiences an emergency when they
          are apart<br />
        </p>
      </div>
    </li>
    <li className="media">
      <div className="media-body">
        <a
          href="https://marvelapp.com/600dj3g/screen/38748069 "
          target="_blank"
        >
          Visit Wearable Interactive App
          <img
            src={watch}
            width={292}
            alt={'watchImage'}
            alt="this is watch app"
          />
        </a>
        <h5 className="bold">Use Case Scenario With Child</h5>
        Child: It was a Monday afternoon Makayla experienced her first eathquake
        while she was in her 2nd grade class room. Makayla imediatly recives a
        call from her mother on her wearble device and Makyla feels scared but
        her mother calms her down. The children had to evacuate the school
        building and Makayla notifies her mother with a voice meassge that she
        will be outside the school waiting for her to be picked up.{' '}
        <p>
          {' '}
          <br />Use Case: Child to Parent<br />
          <br />Primary user: Safe reliable communication device <br />
          <br />Context: Parent and child communicator through parent phone and
          childs waerable <br />
          <br />Scope: Video, chat, messaging, and GPS tracker <br />
          <br />Trigger: Parent and or child experiences an emergency when they
          are apart<br />
        </p>
      </div>
    </li>
  </ul>
)

export default MobilePage
