import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Projects.css"; // import custom CSS file here

import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.png";
import project4 from "../assets/foodapp.png";
import ss1 from "../assets/lesson-adaptation-system/las1.png";
import ss2 from "../assets/lesson-adaptation-system/las2.png";
import ss3 from "../assets/lesson-adaptation-system/las3.png";
import ss4 from "../assets/lesson-adaptation-system/las4.png";
import ff1 from "../assets/food-delivery-app/fda1.png";
import ff2 from "../assets/food-delivery-app/fda2.png";
import ff3 from "../assets/food-delivery-app/fda3.png";
import ff4 from "../assets/food-delivery-app/fda4.png";
import ff5 from "../assets/food-delivery-app/fda5.png";
import ff6 from "../assets/food-delivery-app/fda6.png";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: project1,
      name: "Turkey Tour Guide Website",
      github_link:
        "https://github.com/Imenturki0/turkey-travel-guide/tree/master",
      live_link: "https://myjobsearch.netlify.app",
      description:
        "A detailed web guide for tourists visiting Turkey, with routes, tips, and locations.",
    },
    {
      img: project2,
      name: "Bekron – Coffee Loyalty Mobile App",
      github_link: "https://github.com/Imenturki0/Bekro-app",
      live_link: "https://highking01.netlify.app",
      description: `
          Bekron is a Flutter-based mobile application designed to enhance customer engagement for coffee shops through a digital loyalty system. Users earn points for each coffee purchase and can redeem those points for free drinks or special rewards.

          ✨ Features:
          • Reward point system with real-time tracking  
          • Redeemable points for free coffee and exclusive offers  
          • Clean and modern Flutter UI  
          • Secure authentication and user profiles  
          • Order browsing, purchase history tracking  
          • (Optional: Firebase integration, push notifications, admin-side tools)

          Built with: Flutter, Dart and Firebase 
          `,
    },
    {
      img: project3,
      name: "Lesson Adaptation System",
      github_link: "https://github.com/Imenturki0/Lesson-Adaptation-System",
      live_link: "https://reacttailwindnavbar.netlify.app",
      description: `
        This project was developed to assist students who transfer between universities by helping them adapt their course histories to new curricula.

        💡 Key Points:
        • Frontend-only implementation  
        • Built with React.js and Material UI  
        • User-friendly interface for managing academic course mapping and adaptation  
        • Designed for education administrators and transferred students

        Tech Stack: React.js, Material UI
`,
      screenshots: [ss1, ss2, ss3, ss4],
    },
    {
      img: project4,
      name: "Food Delivery App",
      github_link: "https://github.com/Imenturki0/Food-Delivery-App",
      live_link: "https://foodappl.netlify.app",
      description:
        "A complete mobile app UI for food delivery services including restaurant browsing and ordering.",

      screenshots: [ff1, ff2, ff3, ff4, ff5, ff6],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h3 className="projects-title">
          My <span className="projects-highlight">Projects</span>
        </h3>
        <p className="projects-subtitle">My awesome works</p>
      </div>

      <div className="projects-container">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          breakpoints={{
            0: { slidesPerView: 1.5, centeredSlides: true },
            670: { slidesPerView: 2.5, centeredSlides: true },
            1024: { slidesPerView: 3.5, centeredSlides: true },
          }}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="swiper-wrapper"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div
                className={`project-card ${
                  selectedProject === project ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedProject(
                    selectedProject === project ? null : project
                  )
                }
              >
                <img src={project.img} alt="" className="project-image" />
                <h3 className="project-name">{project.name}</h3>
                <div className="project-links">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="live-link"
                  >
                    Live
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 👉 Show project details below */}
        {selectedProject && (
          <div className="project-details">
            <h3 className="details-title">{selectedProject.name}</h3>
            <p className="details-description">{selectedProject.description}</p>

            {selectedProject.screenshots &&
              selectedProject.screenshots.length > 0 && (
                <div className="screenshots-grid">
                  {selectedProject.screenshots.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="screenshot-image"
                    />
                  ))}
                </div>
              )}

            <div className="details-links">
              <a
                href={selectedProject.github_link}
                target="_blank"
                rel="noreferrer"
                className="details-github-link"
              >
                View GitHub
              </a>
              <a
                href={selectedProject.live_link}
                target="_blank"
                rel="noreferrer"
                className="details-live-link"
              >
                View Live
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
