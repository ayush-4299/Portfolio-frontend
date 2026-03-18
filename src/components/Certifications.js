import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificationsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #16213e 50%, #0a0a0a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 60%);
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

const CertificationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CertificationCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 10, 46, 0.8));
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: conic-gradient(from 0deg, #00d4ff, #ff006e, #00d4ff);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-15px) rotateX(5deg) scale(1.02);
    border-color: #00d4ff;
    box-shadow: 0 20px 60px rgba(0, 212, 255, 0.4);
  }
`;

const CertificationImage = styled(motion.img)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;
  
  ${CertificationCard}:hover & {
    transform: scale(1.05);
    border-color: #00d4ff;
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
`;

const CertificationIssuer = styled.p`
  font-size: 1rem;
  color: #00d4ff;
  margin-bottom: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
`;

const CertificationDate = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0;
  font-weight: 500;
  transition: all 0.3s ease;
`;

const Certifications = () => {
  const certifications = [
    {
      name: 'ChatGPT Prompt Engineering',
      issuer: 'Infosys Springboard',
      date: 'Oct 6, 2025',
      image: '/infosys.jpeg'
    },
    {
      name: 'C++ OOPS with DSA',
      issuer: 'CSE Pathshala',
      date: 'Aug 3, 2025',
      image: '/csepathshala.jpeg'
    },
    {
      name: 'Hack Quest - 24 Hours CTF Challenge',
      issuer: 'upGrad Campus',
      date: 'Apr 1, 2024',
      image: '/hackathon.jpeg'
    },
    {
      name: 'Mastering Python, Pandas, Numpy',
      issuer: 'Udemy',
      date: 'Feb 7, 2024',
      image: '/python-numpy-pandas.jpeg'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: 'easeOut',
      },
    }),
  };

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
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
          >
            {cert.image && (
              <CertificationImage 
                src={cert.image} 
                alt={cert.name}
                as={motion.img}
                whileHover={{ scale: 1.08 }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <CertificationTitle>{cert.name}</CertificationTitle>
            <CertificationIssuer>{cert.issuer}</CertificationIssuer>
            <CertificationDate>📅 {cert.date}</CertificationDate>
          </CertificationCard>
        ))}
      </CertificationsContainer>
    </CertificationsSection>
  );
};

export default Certifications;