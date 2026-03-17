import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaChartBar, FaCode, FaFlask, FaReact, FaNodeJs, FaLightbulb } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #111;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00d4ff;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled(motion.div)`
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

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const SkillList = styled.ul`
  list-style: none;
  text-align: left;
`;

const SkillItem = styled(motion.li)`
  margin-bottom: 0.5rem;
  color: #cccccc;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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