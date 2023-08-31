



import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.png";


import 'swiper/css/autoplay';

const Project = () => {
  const projects = [

    {
      img: project1,
      name: "Turkey Tour Guide Website",
      github_link: "https://github.com/Imenturki0/turkey-travel-guide/tree/master",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project2,
      name: "Coffee Mobile App",
      github_link: "https://github.com/Imenturki0/Bekro-app",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: project3,
      name: "Lesson Adaptation System",
      github_link:
        "https://github.com/Imenturki0/Lesson-Adaptation-System",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },

  ];
 
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex  max-w-6xl gap-6 px-5 mx-auto items-center justify-center ">
      <div className="lg:w-2/3 w-full ">
      <Swiper
        slidesPerview={1.2}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
   
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {projects.map((project_info, i) => (
          <SwiperSlide key={i}>
            <div className=" p-4 bg-slate-700 rounded-xl h-fit  md:w-full w-fit">
              <img src={project_info.img} alt="" className="rounded-lg object-cover h-48 w-96" />
              <h3 className="text-xl my-4">{project_info.name}</h3>
              <div className="flex gap-3">
                <a
                  href={project_info.github_link}
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Github
                </a>
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      </div>
    </section>
  );
};

export default Project;