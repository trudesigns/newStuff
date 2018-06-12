import React from 'react'
import logo from './../images/logo.png'
import brand from './../images/productBranding.jpg'
import packaging from './../images/packaging.jpg'
import print from './../images/printMaterial.jpg'
import web from './../images/web.jpg'

const BrandingPage = () => (
  <ul className="list-unstyled">
    <li className="media">
      <img
        src={brand}
        width={492}
        alt={'brandImage'}
        alt="this is a branding products"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">Label and logo design</h5>
        This is a custom design where I created the logo and label based on
        target on my target audience. Vibes vape products are infused with
        essential oil blends to help consumers obtain a peaceful state of mind.
        Our mission is for consumers to feel positive and make healthier choices
        as well as using our products as an alternative to nicotine or other
        smoking materials. The benefits to using Vibes products is that they are
        infused with essential oil blends to enlighten, rejoice, meditate, and
        maintain a healthier lifestyle. Vibes helps make the unhealthy choice
        healthier. Vape oil can help relieve anxiety, sleep disorders, increase
        concentration, and control stress. Vibes promotes young living and
        accelerate your journey to greater wellness. Vibes is making more than
        one natural and organic product for the youth to alter a feeling in
        natural pure and healthy choice. These products will associate to stars,
        athletes, gurus and spiritual healers/teachers hoping that customers
        will transfer their emotions attachment to better gate way decisions
        such as active life styles and better living habits.
      </div>
    </li>
    <li className="media my-4">
      <img
        src={packaging}
        width={492}
        alt={'packingImage'}
        alt="this is a packaging products"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">Packaging Design</h5>
        This is the packaging with all the current flavors and vibes to
        essentially help you through the week.
      </div>
    </li>
    <li className="media">
      <img
        src={print}
        width={492}
        alt={'printImage'}
        alt="this is print material"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">Print Material</h5>
        This is the print work to advertise the idea I had on essential vape
        oils.
      </div>
    </li>
    <li className="media">
      <img
        src={web}
        width={492}
        alt={'webImage'}
        alt="this is a branding products"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">Web Design</h5>
        This is a mockup of a e-commerce site to advertise the idea I had on
        essential vape oils.
      </div>
    </li>
  </ul>
)

export default BrandingPage
