import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaChartBar, FaCode, FaFlask, FaReact, FaNodeJs, FaLightbulb } from 'react-icons/fa';

const SkillsSection = styled.section`
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SkillCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 10, 46, 0.8));
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: #00d4ff;
    box-shadow: 0 15px 50px rgba(0, 212, 255, 0.3);
    
    &::before {
      left: 100%;
    }
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #ff006e);
    margin: 0.8rem auto 0;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const SkillItem = styled(motion.li)`
  margin-bottom: 1rem;
  color: #cccccc;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  background: rgba(0, 212, 255, 0.08);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  margin: 0.5rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
  transition: all 0.3s ease;
  font-weight: 500;
  
  svg {
    color: #00d4ff;
    font-size: 1.2rem;
  }
  
  &:hover {
    background: rgba(0, 212, 255, 0.2);
    transform: translateY(-3px) scale(1.05);
    border-color: #00d4ff;
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.2);
  }
`;

const Skills = () => {
  const dataSkills = [
    { icon: <FaPython />, text: 'Python (Pandas, NumPy)' },
    { icon: <FaChartBar />, text: 'Power BI' },
    { icon: <FaChartBar />, text: 'Data Visualization' },
    { icon: <FaDatabase />, text: 'SQL (MS SQL Server)' },
    { icon: <FaCode />, text: 'Machine Learning Basics' },
  ];

  const devSkills = [
    { icon: <FaCode />, text: 'C, C++, Java' },
    { icon: <FaFlask />, text: 'Django, Flask' },
    { icon: <FaReact />, text: 'React.js, Node.js' },
    { icon: <FaCode />, text: 'HTML, CSS' },
    { icon: <FaNodeJs />, text: 'REST APIs, Postman' },
  ];

  const softSkills = [
    { icon: <FaLightbulb />, text: 'Problem Solving' },
    { icon: <FaLightbulb />, text: 'Adaptability' },
    { icon: <FaLightbulb />, text: 'Project Management' },
  ];

  return (
    <SkillsSection id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </SectionTitle>
      <SkillsContainer>
        <SkillCard
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SkillTitle>Data Analyst Skills</SkillTitle>
          <SkillList>
            {dataSkills.map((skill, index) => (
              <SkillItem
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill.icon} {skill.text}
              </SkillItem>
            ))}
          </SkillList>
        </SkillCard>
        <SkillCard
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SkillTitle>Development Skills</SkillTitle>
          <SkillList>
            {devSkills.map((skill, index) => (
              <SkillItem
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill.icon} {skill.text}
              </SkillItem>
            ))}
          </SkillList>
        </SkillCard>
        <SkillCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SkillTitle>Soft Skills</SkillTitle>
          <SkillList>
            {softSkills.map((skill, index) => (
              <SkillItem
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill.icon} {skill.text}
              </SkillItem>
            ))}
          </SkillList>
        </SkillCard>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;