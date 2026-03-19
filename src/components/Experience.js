import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: #0a0a0a;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #00d4ff, #ff006e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
`;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ExperienceCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 10, 46, 0.8));
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00d4ff, #ff006e);
    transform: scaleX(0);
    transition: transform 0.4s ease;
    transform-origin: left;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: #00d4ff;
    box-shadow: 0 20px 60px rgba(0, 212, 255, 0.4);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 110, 0.2));
  border: 2px solid rgba(0, 212, 255, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.8rem;
  color: #00d4ff;
  transition: all 0.3s ease;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.5px;
  
  ${ExperienceCard}:hover & {
    color: #00d4ff;
  }
`;

const ExperienceDetails = styled.p`
  color: #cccccc;
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 0;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 212, 255, 0.15);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #00d4ff;
  margin-top: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${ExperienceCard}:hover & {
    background: rgba(0, 212, 255, 0.3);
    border-color: #00d4ff;
    transform: translateY(-2px);
  }
`;

const Experience = () => {
  const experiences = [
    {
      title: 'Django Web Development',
      details: 'Focused on authentication, CRUD operations, database handling, REST APIs, and building production-ready web applications.',
      icon: <FaBriefcase />,
      badge: 'Full-Stack Development',
    },
    {
      title: 'C++ & Data Structures',
      details: 'Mastered algorithms, problem-solving, and competitive programming fundamentals to strengthen core programming skills.',
      icon: <FaTrophy />,
      badge: 'Competitive Programming',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <ExperienceSection id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience & Training
      </SectionTitle>
      <ExperienceContainer>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
          >
            <IconWrapper as={motion.div} whileHover={{ scale: 1.1, rotate: 5 }}>
              {exp.icon}
            </IconWrapper>
            <ExperienceTitle>{exp.title}</ExperienceTitle>
            <ExperienceDetails>{exp.details}</ExperienceDetails>
            <Badge>{exp.badge}</Badge>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;