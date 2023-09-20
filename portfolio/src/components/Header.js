import React from "react";
import profile from "../assets/profile2.jpg";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Marah Habashi</h1>
        <h5 className="text-light">Computer Science student & Web Developer</h5>

        <CTA />
        <HeaderSocial />

        {/* <div className="me">
          <img src={profile} alt="me" />
        </div> */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
