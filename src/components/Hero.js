import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaProjectDiagram } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 0 2rem;
  position: relative;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #333;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #00d4ff;
`;

const Name = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00d4ff;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  color: #cccccc;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.primary ? '#00d4ff' : 'transparent'};
  color: ${props => props.primary ? '#0a0a0a' : '#ffffff'};
  border: 2px solid #00d4ff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background-color: ${props => props.primary ? '#0099cc' : '#00d4ff'};
    color: #0a0a0a;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 2rem;
  transition: color 0.3s;
  &:hover {
    color: #00d4ff;
  }
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="hero">
      <ProfileImage>👤</ProfileImage>
      <Name
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ayush
      </Name>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Data Analyst | Django Full Stack Developer
      </Title>
      <Tagline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Turning data into insights and building intelligent web applications
      </Tagline>
      <ButtonContainer>
        <Button primary onClick={scrollToProjects}>
          <FaProjectDiagram /> View Projects
        </Button>
        <Button>
          <FaDownload /> Download CV
        </Button>
      </ButtonContainer>
      <SocialLinks>
        <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
      </SocialLinks>
      <ScrollDown
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
      >
        <FaArrowDown />
      </ScrollDown>
    </HeroSection>
  );
};

export default Hero;