import React from 'react';
import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import { FaGithub, FaLinkedin, FaDownload, FaProjectDiagram, FaCertificate, FaGraduationCap, FaCode, FaDatabase } from 'react-icons/fa';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import DataHighlights from './components/DataHighlights';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
    line-height: 1.6;
  }
  a {
    color: #00d4ff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  &:hover {
    color: #00d4ff;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Nav>
          <h2>Ayush</h2>
          <NavLinks>
            <NavLink href="#hero" onClick={() => scrollToSection('hero')}>Home</NavLink>
            <NavLink href="#skills" onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink href="#projects" onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink href="#experience" onClick={() => scrollToSection('experience')}>Experience</NavLink>
            <NavLink href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</NavLink>
            <NavLink href="#education" onClick={() => scrollToSection('education')}>Education</NavLink>
          </NavLinks>
          <MobileMenu>
            {/* Mobile menu can be added later */}
          </MobileMenu>
        </Nav>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <DataHighlights />
      </AppContainer>
    </>
  );
}

export default App;
