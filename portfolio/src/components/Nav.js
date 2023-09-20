import React from "react";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { LiaProjectDiagramSolid } from "react-icons/lia";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>

      <a
        href="#educationExperience"
        onClick={() => setActiveNav("#educationExperience")}
        className={activeNav === "#educationExperience" ? "active" : ""}
      >
        <BsFillBookmarkFill />
      </a>

      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <GiSkills />
      </a>

      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <LiaProjectDiagramSolid />
      </a>
    </nav>
  );
};

export default Nav;
