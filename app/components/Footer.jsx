import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import configurations from '@/_data/config'

export default function Footer() {
  return (
    <footer className='footer' >

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.222953186183!2d-75.73540222377314!3d45.38467317107274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce078641b504fd%3A0x1e730682ccd6cb28!2s862%20Merivale%20Rd%2C%20Ottawa%2C%20ON%20K1Z%205Z6!5e0!3m2!1sen!2sca!4v1701638406950!5m2!1sen!2sca" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="footerInfo">
            <Image  src={'/logoFull.svg'} height={150} width={100} alt='logo' />

            <span className="social">
                <h2>SCOPES <span className='red'>BOXING</span> CLUB</h2>
                <span>
                  <Link className='authorLink' href={configurations.socials.facebook} >
                    <Image src={'/facebook.svg'} width={30} height={30} alt='facebook'/>
                  </Link>
                  <Link className='authorLink' href={configurations.socials.instagram} >
                  <Image src={'/instagram.svg'} width={30} height={30} alt='facebook'/>
                  </Link>
                </span>
            </span>

            <span className='creators' >
                <small>POWERED BY</small>
                <Link className='authorLink' href={'https://www.virtuetech.live/'}>VIRTUE</Link>
                <Link className='authorLink' href={'https://www.newpixelmediaent.com/'}>NEW PIXEL MEDIA</Link>
            </span>
        </div>

    </footer>

  )
}
