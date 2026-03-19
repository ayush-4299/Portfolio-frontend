import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaProjectDiagram } from 'react-icons/fa';

const typewriter = `
  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }
  
  @keyframes blink {
    from { border-right-color: #00d4ff; }
    to { border-right-color: transparent; }
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #0f172a;
  padding: 7rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  
  ${typewriter}
`;

const ProfileImage = styled(motion.div)`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: #111827;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 
    0 0 40px rgba(0, 212, 255, 0.5),
    0 0 80px rgba(255, 0, 110, 0.3),
    inset 0 0 40px rgba(255, 255, 255, 0.1);
  border: 3px solid rgba(0, 212, 255, 0.3);
  position: relative;
  z-index: 2;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: #00d4ff;
    opacity: 0.3;
    filter: blur(10px);
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #e6edf7;
  font-weight: 800;
  letter-spacing: 2px;
  text-shadow: none;
  animation: none;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  z-index: 2;
  min-height: 60px;
  margin-bottom: 1.5rem;
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  color: #00d4ff;
  font-weight: 700;
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #00d4ff;
  animation: typewriter 4s steps(40) 1s forwards, blink 0.75s step-end infinite 4s;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    white-space: normal;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 650px;
  color: #cccccc;
  line-height: 1.8;
  position: relative;
  z-index: 2;
  font-weight: 300;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.primary ? 'linear-gradient(135deg, #00d4ff, #0099cc)' : 'transparent'};
  color: ${props => props.primary ? '#0a0a0a' : '#ffffff'};
  border: 2px solid #00d4ff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 0, 110, 0.2);
    transition: left 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-3px) scaleX(1.05);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4);
    border-color: #ff006e;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const SocialLink = styled(motion.a)`
  color: #ffffff;
  font-size: 2.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 110, 0.1));
  border: 2px solid rgba(0, 212, 255, 0.3);
  
  &:hover {
    color: #00d4ff;
    transform: translateY(-8px) rotate(10deg) scale(1.1);
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 110, 0.2));
    border-color: #00d4ff;
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    width: 50px;
    height: 50px;
  }
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: #00d4ff;
  font-size: 2rem;
  padding: 1rem;
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    border-color: #00d4ff;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  }
`;

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <HeroSection id="hero">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}
      >
        <motion.div variants={itemVariants}>
          <ProfileImage
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <img src="/profile.jpeg" alt="Ayush's profile" />
          </ProfileImage>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Name>Ayush</Name>
        </motion.div>

        <motion.div variants={itemVariants}>
          <TitleContainer>
            <Title>Data Analyst</Title>
          </TitleContainer>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SocialLinks>
            <SocialLink 
              href="https://github.com/ayush-4299" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/ayush966/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tagline>
            Transforming data into actionable insights and building intelligent web applications that solve real-world problems
          </Tagline>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ButtonContainer>
            <Button 
              primary 
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaProjectDiagram /> View Projects
            </Button>
            <Button 
              as="a" 
              href="/AyushCVMain.pdf" 
              download="AyushCVMain.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download CV
            </Button>
          </ButtonContainer>
        </motion.div>

      </motion.div>

      <ScrollDown
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
      >
        <FaArrowDown />
      </ScrollDown>
    </HeroSection>
  );
};

export default Hero;