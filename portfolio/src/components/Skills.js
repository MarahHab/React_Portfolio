import React from "react";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoJava } from "react-icons/bi";
import { SiSpring } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { PiCodeSimpleBold } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h5>Skills</h5>
      <h2>My Advantages</h2>
      <div className="about__cards">
        <article className="about__card">
          <FaPython className="about__icon" />
          <h5>Python</h5>
          <small>Computer Science & Mentor</small>
        </article>

        <article className="about__card">
          <IoLogoJavascript className="about__icon" />
          <h5>JavaScript</h5>
          <small>+15 Skils</small>
        </article>

        <article className="about__card">
          <BiLogoJava className="about__icon" />
          <h5>Java</h5>
          <small> 10 Projects</small>
        </article>

        <article className="about__card">
          <SiSpring className="about__icon" />
          <h5>Spring Boot</h5>
          <small> 10 Projects</small>
        </article>

        <article className="about__card">
          <AiOutlineHtml5 className="about__icon" />
          <h5>Html</h5>
          <small> 10 Projects</small>
        </article>

        <article className="about__card">
          <FaCss3Alt className="about__icon" />
          <h5>CSS</h5>
          <small> 10 Projects</small>
        </article>

        <article className="about__card">
          <FaReact className="about__icon" />
          <h5>React</h5>
          <small> 10 Projects</small>
        </article>

        <article className="about__card">
          <FaNodeJs className="about__icon" />
          <h5>Node js</h5>
          <small> 10 Projects</small>
        </article>

        <article className="about__card">
          <SiMicrosoftsqlserver className="about__icon" />
          <h5>SQL/MySQL/NoSQL</h5>
          <small> 10 Projects</small>
        </article>

        <article className="about__card">
          <SiMongodb className="about__icon" />
          <h5>MongoDB</h5>
          <small> 10 Projects</small>
        </article>

        <article className="about__card">
          <PiCodeSimpleBold className="about__icon" />
          <h5>OOP & Design Pattern</h5>
          <small> 10 Projects</small>
        </article>
      </div>
    </section>
  );
};

export default Skills;
