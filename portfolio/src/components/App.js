import React from "react";
import "../index.css";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import EduExp from "./EduExp";
import Skills from "./Skills";
import Projects from "./Projects";
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <About />
        <EduExp />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
