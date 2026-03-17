import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const CertificationsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #0a0a0a;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00d4ff;
`;

const CertificationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CertificationCard = styled(motion.div)`
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

const CertificationTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Certifications = () => {
  const certifications = [
    'ChatGPT Prompt Engineering',
    'C++ OOPS with DSA',
    'Cloud Computing',
    'Hackathon Participation',
    'Python (Udemy)',
  ];

  return (
    <CertificationsSection id="certifications">
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Certifications
      </SectionTitle>
      <CertificationsContainer>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FaCertificate style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '1rem' }} />
            <CertificationTitle>{cert}</CertificationTitle>
          </CertificationCard>
        ))}
      </CertificationsContainer>
    </CertificationsSection>
  );
};

export default Certifications;