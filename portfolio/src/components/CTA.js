import React from "react";
import cv from "../assets/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn ">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
