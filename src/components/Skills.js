


import React from "react";
import {FaReact,FaNodeJs,FaPython} from "react-icons/fa";

import { DiCss3 ,DiHtml5,DiJavascript} from "react-icons/di";
import {RiFlutterFill} from "react-icons/ri";
import Swing from 'react-reveal/Swing';


const Skills = () => {
  


  const skills = [
    {
      logo: <DiHtml5/>,
      level: "HTML",
      count: 86,
    },
    {
      logo: <DiCss3/>,
      level: "CSS",
      count: 90,
    },
    {
      logo: <FaNodeJs/>,
      level: "NodJs",
      count: 40,
    },
    {
      logo: <FaReact/>,
      level: "ReactJs",
      count: 80,
    },
    {
      logo: <FaPython/>,
      level: "Python",
      count: 80,
    },
    {
      logo: <DiJavascript/>,
      level: "Javascript",
      count: 80,
    },
    {
      logo: <RiFlutterFill/>,
      level: "Flutter",
      count: 80,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
           <Swing>
           <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
            </Swing> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;