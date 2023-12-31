import React from "react";
import Image from "next/image";
import Link from "next/link";

import services from "@/_data/services";
import schedule from "@/_data/schedule";

import Footer from "../components/Footer";
import configurations from "@/_data/config";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="navbar">
          <span>
            <Link href={"/"}>
              <Image
                className="logo"
                src={"/logoRB.svg"}
                alt="logo"
                width={70}
                height={50}
              />
            </Link>
            <nav>
              <Link className="menuLink" href={"#about-us"}>
                ABOUT
              </Link>
              <Link className="menuLink" href={"#training-information"}>
                TRAINING
              </Link>
              <Link className="menuLink" href={"#contact-information"}>
                FIND US
              </Link>
              <Link className="menuLink" href={"#register"}>
                REGISTER
              </Link>
            </nav>
          </span>
          <Link className="button-01" href={"#contact-information"}>
            CALL US
          </Link>
        </div>
        <Image
          className="heroImage"
          src={"/heroImage.svg"}
          width={150}
          height={150}
          alt="hero image"
        />
        <Image
          className="punchingBag"
          src={"/punchingBag.svg"}
          width={150}
          height={150}
          alt="punching bag"
        />
      </section>

      <section id="about-us" className="about">
        <Image
          className="boxer"
          src={"/boxer.svg"}
          width={150}
          height={150}
          alt="boxer"
        />

        <div className="aboutInfo">
          <h2>Health and Fitness in Every Punch</h2>
          <p>{configurations.aboutDescription}</p>

          <Link href={"#contact-information"} className="button-01">
            FIND US
          </Link>
        </div>
      </section>

      <section id="training-information" className="training">
        <Image
          className="gloves"
          src={"/gloves.svg"}
          width={150}
          height={150}
          alt="gloves"
        />
        {configurations.features.map((service, index) => (
          <div key={index} className="serviceItem">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section id="register" className="register">
        <h4>Register Now</h4>
        <p>
          If you are ready to take your fitness journey to the next level with
          Scopes Boxing Club, we invite you to get in touch with us today.
          Whether youre a seasoned boxer or just beginning, our tailored
          training programs are designed to suit your individual needs. Dont
          hesitate to call us at {configurations.phone} for more information or
          to register for training. Alternatively, you can visit us at our
          Merivale, Ottawa location to experience the vibrant atmosphere of our
          gym and speak directly with our trainers. Come in today to start your
          transformation with Scopes Boxing Club, where every members fitness
          journey is our top priority. Were excited to welcome you to our
          community and help you achieve your boxing and fitness goals!
        </p>
        <Link href={"#contact-information"} className="button-02">
          Contact Us
        </Link>
      </section>

      <section id="contact-information" className="find">
        <h4>TAKE YOUR HEALTH AND FITNESS TO THE NEXT LEVEL</h4>
        <Image src={"/logoRB.svg"} height={70} width={100} alt="logo" />
        <h2>COME AND VISIT US.</h2>

        <div className="infoBox">
          <span id="firstchild">
            <p>{configurations.phone}</p>
            <p>{configurations.email}</p>
          </span>

          <span id="secondchild">
            <p>{configurations.address}</p>
            <p>K1Z 5Z6</p>
          </span>
        </div>

        <div className="calendarbox">
          {schedule.map((day, index) => (
            <span
              key={index}
              className={index % 2 === 0 ? "schedule" : "scheduleAlt"}
            >
              <p>{day.day}</p>
              <p>{day.time}</p>
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
