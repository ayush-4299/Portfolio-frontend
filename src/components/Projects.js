import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 10, 46, 0.8));
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: conic-gradient(from 0deg, #00d4ff, #ff006e, #00d4ff);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 10, 46, 0.8));
    border-radius: 14px;
    transition: all 0.4s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: #00d4ff;
    box-shadow: 0 20px 60px rgba(0, 212, 255, 0.4);
    
    &::before {
      opacity: 0.5;
    }
  }
`;

const ProjectContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  
  span {
    padding: 0.5rem 1rem;
    background: rgba(0, 212, 255, 0.15);
    border: 1px solid rgba(0, 212, 255, 0.3);
    border-radius: 20px;
    font-size: 0.9rem;
    color: #00d4ff;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(0, 212, 255, 0.3);
      border-color: #00d4ff;
      transform: translateY(-2px);
    }
  }
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  margin-bottom: 1rem;
  line-height: 1.7;
  font-weight: 300;
  flex-grow: 1;
`;

const ProjectImpact = styled.div`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 110, 0.05));
  border-left: 3px solid #00d4ff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #e0e0e0;
  font-weight: 500;
  
  strong {
    color: #00d4ff;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 212, 255, 0.2);
`;

const ProjectLink = styled(motion.a)`
  color: #00d4ff;
  font-size: 1.5rem;
  padding: 0.8rem;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.1);
  border: 2px solid rgba(0, 212, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 212, 255, 0.2);
    border-color: #00d4ff;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'AI Cricket Score Prediction',
      techs: ['ML', 'Python', 'APIs', 'TensorFlow'],
      description: 'Developed a machine learning model to predict cricket scores in real-time using historical data and live match statistics.',
      impact: 'Provides accurate predictions with real-time capability, enhancing user engagement and decision-making.',
      github: 'https://github.com',
    },
    {
      title: 'Spam Email Classification Dashboard',
      techs: ['Power BI', 'Data Analysis', 'SQL'],
      description: 'Created an interactive dashboard for classifying and analyzing spam emails using advanced data visualization techniques.',
      impact: 'Reveals insights into spam detection patterns, improving email security and user experience.',
      github: 'https://github.com',
    },
    {
      title: 'Quiz Application',
      techs: ['Django', 'React', 'PostgreSQL', 'REST API'],
      description: 'Built a full-stack quiz application with user authentication, dynamic questions, real-time scoring, and progress tracking.',
      impact: 'Demonstrates robust backend logic and dynamic UI, facilitating interactive learning experiences.',
      github: 'https://github.com',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </SectionTitle>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
          >
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectTech>
                {project.techs.map((tech, i) => (
                  <motion.span key={i} whileHover={{ scale: 1.1 }}>
                    {tech}
                  </motion.span>
                ))}
              </ProjectTech>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectImpact>
                <strong>💡 Impact:</strong> {project.impact}
              </ProjectImpact>
            </ProjectContent>
            <ProjectLinks>
              <ProjectLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="View on GitHub"
              >
                <FaGithub />
              </ProjectLink>
              <ProjectLink
                as="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="View Live Demo"
              >
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