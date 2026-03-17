import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChartBar, FaDatabase, FaLightbulb } from 'react-icons/fa';

const DataHighlightsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #0a0a0a;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00d4ff;
`;

const HighlightsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HighlightCard = styled(motion.div)`
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

const HighlightTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const HighlightDescription = styled.p`
  color: #cccccc;
`;

const DataHighlights = () => {
  const highlights = [
    {
      icon: <FaLightbulb />,
      title: 'Analytics Mindset',
      description: 'Strong focus on data-driven decision making and extracting meaningful insights from complex datasets.',
    },
    {
      icon: <FaChartBar />,
      title: 'Dashboard Expertise',
      description: 'Proficient in creating interactive dashboards that visualize data effectively for stakeholders.',
    },
    {
      icon: <FaDatabase />,
      title: 'Insight Generation',
      description: 'Skilled in identifying patterns, trends, and actionable insights to drive business value.',
    },
  ];

  return (
    <DataHighlightsSection id="data-highlights">
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Data Portfolio Highlights
      </SectionTitle>
      <HighlightsContainer>
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{ fontSize: '3rem', color: '#00d4ff', marginBottom: '1rem' }}>
              {highlight.icon}
            </div>
            <HighlightTitle>{highlight.title}</HighlightTitle>
            <HighlightDescription>{highlight.description}</HighlightDescription>
          </HighlightCard>
        ))}
      </HighlightsContainer>
    </DataHighlightsSection>
  );
};

export default DataHighlights;