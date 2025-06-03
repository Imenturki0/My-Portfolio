import React, { useRef } from "react";
import Fileeng from "../assets/CV-eng.pdf";
import Filetr from "../assets/CV-tr.pdf";
import Slide from "react-reveal/Fade";

const About = () => {
  return (
    <section id="about" className="py-10 text-white bg-gray-800">
      <div className="text-center mt-8">
        <Slide left duration={1000}>
          <h3 className="text-4xl font-semibold">
            About <span className="text-cyan-600">Me</span>
          </h3>
          <p className="text-gray-400 my-3 text-lg">My introduction</p>

          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am a Computer Engineering studies fresh graduate at FSMV
                university . I am highly motivated person with integrity and
                goals. I have web and mobile development knowledge but i am
                still interested in other field and i have the motivation to
                learn different things .
              </p>

              <br />
              <br />
              <div className="flex gap-4 justify-center">
                <a href={Fileeng} download="english cv">
                  <button className="btn-primary">English CV</button>
                </a>
                <a href={Filetr} download="turkish cv">
                  <button className="btn-primary">Turkish CV</button>
                </a>
              </div>
            </div>
            {/*        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
            
            </div>
                </div>*/}
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default About;
