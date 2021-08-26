import React from "react";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-800 body-font font-sorts-mill">
      <NavBar />
      <About />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact />
    </main>
  )
}
