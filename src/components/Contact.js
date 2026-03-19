import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #0a0a0a;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00d4ff;
  font-weight: 800;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
`;

const ContactContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  text-align: left;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.6), rgba(26, 10, 46, 0.6));
  border-radius: 12px;
  border: 2px solid rgba(0, 212, 255, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &:hover {
    transform: translateX(10px);
    border-color: rgba(0, 212, 255, 0.5);
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(26, 10, 46, 0.8));
    box-shadow: 0 10px 40px rgba(0, 212, 255, 0.15);
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 2.5rem;
  color: #00d4ff;
  margin-top: 0.25rem;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${ContactItem}:hover & {
    color: #ff006e;
  }
`;

const ContactItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.h4`
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  
  ${ContactItem}:hover & {
    color: #00d4ff;
  }
`;

const ContactValue = styled.p`
  color: #cccccc;
  margin: 0;
  transition: color 0.3s ease;
  
  ${ContactItem}:hover & {
    color: #e0e0e0;
  }
`;

const ContactLink = styled.a`
  color: #00d4ff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    color: #ff006e;
    text-shadow: 0 0 15px rgba(255, 0, 110, 0.5);
  }
`;

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.6), rgba(26, 10, 46, 0.6));
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid rgba(0, 212, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  color: #00d4ff;
  margin-bottom: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 1rem;
  background: linear-gradient(135deg, rgba(20, 20, 40, 0.8), rgba(30, 10, 50, 0.8));
  border: 2px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  backdrop-filter: blur(5px);
  
  &::placeholder {
    color: rgba(200, 200, 200, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
    background: linear-gradient(135deg, rgba(20, 20, 40, 1), rgba(30, 10, 50, 1));
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: linear-gradient(135deg, rgba(20, 20, 40, 0.8), rgba(30, 10, 50, 0.8));
  border: 2px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-family: inherit;
  backdrop-filter: blur(5px);
  
  &::placeholder {
    color: rgba(200, 200, 200, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
    background: linear-gradient(135deg, rgba(20, 20, 40, 1), rgba(30, 10, 50, 1));
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0a0a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(0, 212, 255, 0.6);
    background: linear-gradient(135deg, #ff006e, #ff3d8f);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 60, 40, 0.8), rgba(0, 30, 20, 0.8));
  border: 2px solid #00d4ff;
  color: #00ff88;
  padding: 1.25rem;
  border-radius: 10px;
  text-align: center;
  margin-top: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 20px rgba(0, 212, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:ayushayush2214@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <ContactSection id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </SectionTitle>
      <ContactContainer>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ContactItem variants={itemVariants}>
              <IconWrapper
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope />
              </IconWrapper>
              <ContactItemContent>
                <ContactLabel>Email</ContactLabel>
                <ContactLink href="mailto:ayushayush2214@gmail.com">
                  ayushayush2214@gmail.com
                </ContactLink>
              </ContactItemContent>
            </ContactItem>

            <ContactItem variants={itemVariants}>
              <IconWrapper
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ duration: 0.3 }}
              >
                <FaPhone />
              </IconWrapper>
              <ContactItemContent>
                <ContactLabel>Phone & WhatsApp</ContactLabel>
                <ContactLink href="tel:+919992953966">+91 999 295 3966</ContactLink>
              </ContactItemContent>
            </ContactItem>

            <ContactItem variants={itemVariants}>
              <IconWrapper
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <FaMapMarkerAlt />
              </IconWrapper>
              <ContactItemContent>
                <ContactLabel>Location</ContactLabel>
                <ContactValue>India</ContactValue>
              </ContactItemContent>
            </ContactItem>
          </motion.div>
        </ContactInfo>

        <FormContainer
          as="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Full Name"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your-email@example.com"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Message Subject"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane /> Send Message
          </SubmitButton>

          {submitted && (
            <SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <FaCheck /> Message sent! Check your email client.
            </SuccessMessage>
          )}
        </FormContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;