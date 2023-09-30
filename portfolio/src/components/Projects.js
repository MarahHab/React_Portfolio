import React from "react";
import ticTacToe from "../assets/TicTacToe.jpeg";
import gradeCalc from "../assets/GradeCalc.webp";
import bankManagement from "../assets/bankManagement.jpg";
import vehicleDetection from "../assets/vehicleDetection.png";

const data = [
  {
    id: 1,
    image: vehicleDetection,
    title: "Object Detection Web ",
    github: "https://github.com/MarahHab/Vehicle_Detection.git",
    demo: "https://finalproject-667eb.web.app/",
    info: " vehicle detection web application combines the power of deep learning models like YOLOv5 and SSD with a user-friendly web interface developed using Python, HTML, CSS, and Bootstrap. ",
  },

  {
    id: 2,
    image: ticTacToe,
    title: "Tic Tac Toe Game",
    github: "https://github.com/MarahHab/Tic_Tac_Toe_Game",
    demo: "",
    info: "A Tic-Tac-Toe web application developed with JavaScript, CSS, and HTML is a simple yet engaging game that can be played in a web browser.",
  },

  {
    id: 3,
    image: gradeCalc,
    title: "Grade Calculator Web",
    github: "https://github.com/celinekaram99/grades_calc",
    demo: "https://grades-cals.onrender.com/",
    info: "A grade calculator web application developed with EJS (Embedded JavaScript) and CSS is a useful tool for students and educators to calculate and manage grades for various assignments, exams, or courses. ",
  },

  {
    id: 4,
    image: bankManagement,
    title: "Bank Mangment System",
    github: "https://github.com/MarahHab/Spring_boot_bank",
    demo: "",
    info: "A bank management system developed with Java Spring Boot is a comprehensive software solution that enables banks to efficiently manage various aspects of their operations, including customer accounts, transactions, employees, and more.",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>Portfolio</h5>
      <h2>Featured Project</h2>

      <div className="container portfolio__containe">
        {data.map(({ id, image, title, github, demo, info }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>
                {title} <hr /> <h2>{info}</h2>
              </h3>

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
