import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = styled.section`
  padding: 5rem 2rem;
  background-color: #111;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00d4ff;
`;

const EducationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const EducationItem = styled(motion.div)`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const EducationDetails = styled.p`
  color: #cccccc;
`;

const Education = () => {
  const education = [
    {
      title: 'B.Tech CSE',
      institution: 'LPU',
      details: 'CGPA: 6.5',
    },
    {
      title: 'Intermediate',
      institution: '',
      details: '',
    },
    {
      title: 'Matriculation',
      institution: '',
      details: '',
    },
  ];

  return (
    <EducationSection id="education">
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Education
      </SectionTitle>
      <EducationContainer>
        {education.map((edu, index) => (
          <EducationItem
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '1rem' }} />
            <EducationTitle>{edu.title}</EducationTitle>
            <EducationDetails>{edu.institution} {edu.details}</EducationDetails>
          </EducationItem>
        ))}
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;