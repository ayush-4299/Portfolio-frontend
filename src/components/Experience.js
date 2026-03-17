import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 5rem 2rem;
  background-color: #111;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00d4ff;
`;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 212, 255, 0.2);
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ExperienceDetails = styled.p`
  color: #cccccc;
`;

const Experience = () => {
  const experiences = [
    {
      title: 'Django Web Development Training',
      details: 'Focused on authentication, CRUD operations, and database handling to build robust web applications.',
    },
    {
      title: 'C++ & DSA Training',
      details: 'Emphasized problem solving and algorithms to strengthen programming fundamentals.',
    },
  ];

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
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ExperienceTitle>{exp.title}</ExperienceTitle>
            <ExperienceDetails>{exp.details}</ExperienceDetails>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;