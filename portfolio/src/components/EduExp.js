import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const EduExp = () => {
  return (
    <section id="educationExperience">
      <h5>Resume</h5>
      <h2> Education & Experience</h2>

      <div className="container eduExp__container">
        <article className="sr">
          <div className="sr__head">
            <h3>High School</h3>
            <small>
              Iksal High School <hr />
              2015 - 2018
            </small>
          </div>
          <ul className="sr__list">
            <li>
              <AiTwotoneStar className="sr__list-icon" />
              <p>Pursuing B.Sc in Computer Science - 1 semester remaining</p>
            </li>
            <li>
              <AiTwotoneStar className="sr__list-icon" />
              <p>
                Courses: Data Structures, Algorithms, Deep Learning, AI, OOP &
                Design Patterns
              </p>
            </li>
          </ul>
        </article>

        {/* ----------------------------- */}

        <article className="sr">
          <div className="sr__head">
            <h3>Academic Education</h3>
            <small>
              Ramat Gan Academic College <hr />
              2020 - Present
            </small>
          </div>
          <ul className="sr__list">
            <li>
              <AiTwotoneStar className="sr__list-icon" />
              <p>Majors: Physics & Computer Science</p>
            </li>
          </ul>
        </article>

        {/* ------------------------------- */}

        <article className="sr">
          <div className="sr__head">
            <h3>Experience</h3>
            <small>Volnteer Experience</small>
          </div>
          <ul className="sr__list">
            <li>
              <AiTwotoneStar className="sr__list-icon" />
              <p>
                2022 - 2023 : Academic Mentor at Ramat Gan Academic College{" "}
              </p>
            </li>

            <li>
              <AiTwotoneStar className="sr__list-icon" />
              <p>2020 - 2022 : Instructor at "Perach" high-tech program </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default EduExp;
