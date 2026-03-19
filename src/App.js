import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import DataHighlights from './components/DataHighlights';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #0b1220;
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  section {
    background: #0f172a !important;
  }
  
  a {
    color: #00d4ff;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  a:hover {
    color: #ff006e;
  }
  
  /* Custom cursor */
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="6" fill="%2300d4ff"/></svg>') 16 16, auto;
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: #00d4ff;
  z-index: 2000;
  transition: width 0.1s ease;
`;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(11, 18, 32, 0.95);
  backdrop-filter: blur(20px);
  z-index: 999;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(0, 212, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-bottom-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 212, 255, 0.2);
  }
  
  h2 {
    font-size: 1.8rem;
    color: #e6edf7;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.5px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #00d4ff;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #00d4ff;
    transform: translateY(-3px);
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ProgressBar style={{ width: `${scrollProgress}%` }} />
      <AppContainer>
        <Nav>
          <h2 style={{ cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>Ayush</h2>
          <NavLinks>
            <NavLink href="#hero" onClick={() => scrollToSection('hero')}>Home</NavLink>
            <NavLink href="#skills" onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink href="#projects" onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink href="#experience" onClick={() => scrollToSection('experience')}>Experience</NavLink>
            <NavLink href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</NavLink>
            <NavLink href="#education" onClick={() => scrollToSection('education')}>Education</NavLink>
            <NavLink href="#contact" onClick={() => scrollToSection('contact')}>Contact</NavLink>
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
        <Contact />
      </AppContainer>
    </>
  );
}

export default App;
