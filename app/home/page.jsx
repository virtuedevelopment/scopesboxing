import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import services from '@/_data/services'
import schedule from '@/_data/schedule'

import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
        <section className="hero">
            <div className="navbar">
                <span>
                    <Link href={'/'} ><Image className='logo' src={'/logoRW.svg'} alt='logo' width={70} height={50} /></Link>
                    <nav>
                        <Link className='menuLink' href={'#about-us'}>ABOUT</Link>
                        <Link className='menuLink' href={'#training-information'}>TRAINING</Link>
                        <Link className='menuLink' href={'#contact-information'}>FIND US</Link>
                    </nav>
                </span>
                <Link className='button-01' href={'#contact-information'} >CALL US</Link>
            </div>
            <Image className='heroImage' src={'/heroImage.svg'} width={150} height={150} alt='hero image' />
            <Image className='punchingBag' src={'/punchingBag.svg'} width={150} height={150} alt='punching bag' />
        </section>

        <section id='about-us' className="about">
            <Image className="boxer" src={'/boxer.svg'} width={150} height={150} alt='boxer' />

            <div className="aboutInfo">
                <h2>WHY WE TRAIN</h2>
                <h4>Where It All Started</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis commodi, recusandae corrupti nostrum fuga molestias similique adipisci. 
                    Iusto, quae obcaecati illum quis vero alias. Repellat natus placeat libero alias officia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis commodi, recusandae corrupti nostrum fuga molestias similique adipisci. 
                    Iusto, quae obcaecati illum quis vero alias. Repellat natus placeat libero alias officia.
                </p>

                <Link href={'#contact-information'} className="button-01">FIND US</Link>
            </div>
        </section>

        <section id='training-information' className="training">
            <Image className='gloves' src={'/gloves.svg'} width={150} height={150} alt='gloves' />
            {services.map((service,index) =>(
                <div key={index} className="serviceItem">
                    <h4>{service.name}</h4>
                    <p>{service.description}</p>
                </div>
            ))}
        </section>

        <section id='contact-information' className="find">
            <Image src={'/logoRB.svg'} height={70} width={100} alt='logo' />
            <h2>COME AND VISIT US.</h2>
            <h4>TAKE YOUR HEALTH AND FITNESS TO THE NEXT LEVEL</h4>
            
            <div className="infoBox">
                <span id='firstchild' >
                    <p>717 - 848 - 8893</p>
                    <p>SCOPESBOXING@GMAIL.COM</p>
                </span>

                <span id='secondchild' >
                    <p>1000 BOOSERT BLVD OTTAWA ON</p>
                    <p>K1K 9J4 SUITE 55</p>
                </span>
            </div>

            <div className="calendarbox">
                {schedule.map((day, index) => (
                    <span key={index} className={index % 2 === 0 ? "schedule" : "scheduleAlt"}>
                        <p>{day.day}</p>
                        <p>{day.time}</p>
                    </span>
                ))}
            </div>

        </section>
        
        <Footer/>
    </main>
  )
}
