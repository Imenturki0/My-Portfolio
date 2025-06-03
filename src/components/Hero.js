import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaKaggle} from "react-icons/fa";
import img from "../assets/imen2.png";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import { TypeAnimation } from "react-type-animation";
import "../styles/Hero.css"; // ✅ Import the CSS

export default function Hero() {
  return (
    <section id="home" className="hero-section">
     

      <Fade left exit={true} duration={1000}>
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">
              <span className="hero-title-highlight">Hello!<br /></span>
              My name is <span>IMEN TURKI</span>
            </h1>

            <h4 className="hero-subtitle">
              <TypeAnimation
                sequence={[
                  "I'm a Fullstack Developer",
                  1000,
                  "I'm a Mobile Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontSize: "1em" }}
              />
            </h4>

            <button className="hero-button">
              <a href="#contact">Contact Me</a>
            </button>

            <div className="hero-socials">
              <BsLinkedin
                onClick={() =>
                  window.open("https://www.linkedin.com/in/imen-turki0/", "_blank")
                }
                className="hero-icon"
              />
              <AiFillGithub
                onClick={() =>
                  window.open("https://github.com/Imenturki0/", "_blank")
                }
                className="hero-icon"
              />
              <FaKaggle
                onClick={() =>
                  window.open("https://www.kaggle.com/imenturki/", "_blank")
                }
                className="hero-icon"
              />
            </div>
          </div>
        </div>
      </Fade>
       <Pulse forever={false}>
        <div className="hero-image-container">
          <img src={img} className="hero-image" alt="Imen Turki" />
        </div>
      </Pulse>
    </section>
  );
}
