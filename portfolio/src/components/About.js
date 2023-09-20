import React from "react";
import pro from "../assets/profile2.jpg";
import { FaAward } from "react-icons/fa";
import { MdOutlineGppGood } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={pro} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education </h5>
              <small>B.Sc Computer Science Student</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Experience</h5>
              <small> Academic Mentor </small>
            </article>

            <article className="about__card">
              <MdOutlineGppGood className="about__icon" />
              <h5>Skills</h5>
              <small>+10 Skils</small>
            </article>
          </div>
          <p>
            As a computer science student in my final semester, I am eager to
            embark on my professional journey as a developer and software
            engineer. With a strong foundation in both backend and frontend
            technologies, I have honed my skills in crafting robust, efficient,
            and user-friendly applications. I am passionate about creating
            elegant solutions to complex problems and have experience working on
            a variety of projects that showcase my adaptability and versatility.
            I am excited to bring my technical expertise and innovative mindset
            to a dynamic team, contributing to the ever-evolving world of
            software development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
