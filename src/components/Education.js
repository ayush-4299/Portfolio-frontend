import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBook } from 'react-icons/fa';

const EducationSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #111 0%, #1a0a2e 50%, #111 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 0, 110, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }
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

const EducationContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const EducationItem = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 10, 46, 0.8));
  padding: 2.5rem;
  border-radius: 15px;
  margin-bottom: 2.5rem;
  border: 2px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  text-align: left;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #00d4ff, #ff006e);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateX(10px) scale(1.02);
    border-color: #00d4ff;
    box-shadow: 0 15px 50px rgba(0, 212, 255, 0.3);
    
    &::before {
      transform: scaleY(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 110, 0.2));
  border: 2px solid rgba(0, 212, 255, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #00d4ff;
  transition: all 0.3s ease;
  flex-shrink: 0;
`;

const EducationTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.5px;
  
  ${EducationItem}:hover & {
    color: #00d4ff;
  }
`;

const EducationInstitution = styled.p`
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  ${EducationItem}:hover & {
    transform: translateX(5px);
  }
`;

const EducationDetails = styled.p`
  color: #cccccc;
  margin: 0.5rem 0;
  line-height: 1.6;
  font-weight: 300;
  transition: all 0.3s ease;
  
  ${EducationItem}:hover & {
    color: #e0e0e0;
  }
`;

const EducationMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const MetaBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 212, 255, 0.12);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #00d4ff;
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${EducationItem}:hover & {
    background: rgba(0, 212, 255, 0.25);
    border-color: #00d4ff;
    transform: translateY(-2px);
  }
`;

const Education = () => {
  const education = [
    {
      title: 'B.Tech - Computer Science & Engineering',
      institution: 'Lovely Professional University',
      details: 'CGPA: 6.5 | Core focus on data structures, algorithms, web development, and databases.',
      icon: <FaGraduationCap />,
    },
    {
      title: 'Intermediate (12th)',
      institution: 'New Happy Public School (CBSE)',
      details: 'PCM | Percentage: 68% | Strong foundation in mathematics, physics, and chemistry.',
      icon: <FaBook />,
    },
    {
      title: 'Matriculation (10th)',
      institution: 'New Happy Public School (CBSE)',
      details: 'Percentage: 72% | Comprehensive knowledge across all major subjects.',
      icon: <FaAward />,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
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
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
          >
            <IconWrapper as={motion.div} whileHover={{ scale: 1.1, rotate: 5 }}>
              {edu.icon}
            </IconWrapper>
            <EducationTitle>{edu.title}</EducationTitle>
            <EducationInstitution>{edu.institution}</EducationInstitution>
            <EducationDetails>{edu.details}</EducationDetails>
            <EducationMeta>
              <MetaBadge>📚 Academic</MetaBadge>
              <MetaBadge>🎓 Certified</MetaBadge>
            </EducationMeta>
          </EducationItem>
        ))}
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;