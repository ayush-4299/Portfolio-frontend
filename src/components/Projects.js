import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #0a0a0a;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00d4ff;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
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

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ProjectTech = styled.p`
  font-size: 1rem;
  color: #00d4ff;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  margin-bottom: 1rem;
`;

const ProjectImpact = styled.p`
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #00d4ff;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #0099cc;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'AI Cricket Score Prediction Tool',
      tech: 'ML + APIs',
      description: 'Developed a machine learning model to predict cricket scores in real-time using historical data and live match statistics.',
      impact: 'Provides accurate predictions with real-time capability, enhancing user engagement and decision-making.',
      github: 'https://github.com',
    },
    {
      title: 'Spam Email Classification Dashboard',
      tech: 'Power BI',
      description: 'Created an interactive dashboard for classifying and analyzing spam emails using data visualization techniques.',
      impact: 'Reveals insights into spam detection patterns, improving email security and user experience.',
      github: 'https://github.com',
    },
    {
      title: 'Quiz Application',
      tech: 'Django + JS',
      description: 'Built a full-stack quiz application with user authentication, dynamic questions, and scoring system.',
      impact: 'Demonstrates robust backend logic and dynamic UI, facilitating interactive learning experiences.',
      github: 'https://github.com',
    },
  ];

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </SectionTitle>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectTech>{project.tech}</ProjectTech>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectImpact>Key Impact: {project.impact}</ProjectImpact>
            <ProjectLinks>
              <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </ProjectLink>
              <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;