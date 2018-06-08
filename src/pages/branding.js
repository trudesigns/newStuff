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
        <h5 className="mt-0 mb-1">List-based media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
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
        <h5 className="mt-0 mb-1">List-based media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
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
        <h5 className="mt-0 mb-1">List-based media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
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
        <h5 className="mt-0 mb-1">List-based media object</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
      </div>
    </li>
  </ul>
)

export default BrandingPage
