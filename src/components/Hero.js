import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Hero() {



  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src="imen1.png" className="md:w-11/12 h-full object-cover"></img>
      </div>
      <div className="flex-1 ">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 
          text-white  font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl ">
              Hello!
              <br />
            </span>
            My name is <span>Imen Turki</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 
          font-bold text-gray-600"> Fullstack Developer</h4>
          <button className="btn-primary mt-8"><a href="#contact">Contact Me</a></button>
          <div className="mt-8 text-2xl flex items-center md:justify-start justify-center gap-5">
           {/*<BsInstagram onClick={()=>window.open("https://www.linkedin.com/in/imen-turki0/", "_blank")} className="text-gray-600 hover:text-white"/>
            <BsFacebook className="text-gray-600 hover:text-white"/>*/ } 
            <BsLinkedin onClick={()=>window.open("https://www.linkedin.com/in/imen-turki0/", "_blank")} className="text-gray-600 hover:text-white"/>
          </div>
        </div>
      </div>
    </section>
  );
}