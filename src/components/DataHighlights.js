import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChartBar, FaDatabase, FaLightbulb } from 'react-icons/fa';

const DataHighlightsSection = styled.section`
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

const HighlightsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HighlightCard = styled(motion.div)`
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
    width: 300%;
    height: 300%;
    top: -100%;
    left: -100%;
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

const IconWrapper = styled(motion.div)`
  font-size: 3.5rem;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  
  ${HighlightCard}:hover & {
    color: #ff006e;
  }
`;

const HighlightTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  
  ${HighlightCard}:hover & {
    color: #00d4ff;
  }
`;

const HighlightDescription = styled.p`
  color: #cccccc;
  line-height: 1.7;
  font-weight: 300;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  
  ${HighlightCard}:hover & {
    color: #e0e0e0;
  }
`;

const DataHighlights = () => {
  const highlights = [
    {
      icon: <FaLightbulb />,
      title: 'Analytics Mindset',
      description: 'Strong focus on data-driven decision making and extracting meaningful insights from complex datasets to drive strategic outcomes.',
    },
    {
      icon: <FaChartBar />,
      title: 'Dashboard Expertise',
      description: 'Proficient in creating interactive, visually compelling dashboards that communicate data stories effectively to stakeholders.',
    },
    {
      icon: <FaDatabase />,
      title: 'Insight Generation',
      description: 'Skilled in identifying patterns, trends, and actionable insights to unlock hidden value and drive measurable business impact.',
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
    <DataHighlightsSection id="data-highlights">
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Data & Analytics Highlights
      </SectionTitle>
      <HighlightsContainer>
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
          >
            <IconWrapper
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              {highlight.icon}
            </IconWrapper>
            <HighlightTitle>{highlight.title}</HighlightTitle>
            <HighlightDescription>{highlight.description}</HighlightDescription>
          </HighlightCard>
        ))}
      </HighlightsContainer>
    </DataHighlightsSection>
  );
};

export default DataHighlights;