import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/marah-habashi-104263239/"
        target="_blank"
      >
        <BsLinkedin />
      </a>

      <a href="https://github.com/MarahHab" target="_blank">
        <BsGithub />
      </a>
      <a href="mailto:marah.hab2@gmail.com">
        <MdOutlineEmail />
      </a>
    </div>
  );
};

export default HeaderSocial;
