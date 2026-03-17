import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: #111;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #00d4ff;
`;

const ContactContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
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
  margin-bottom: 2rem;
`;

const IconBox = styled.div`
  font-size: 2rem;
  color: #00d4ff;
  margin-top: 0.5rem;
`;

const ContactItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.h4`
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.p`
  color: #cccccc;
  margin: 0;
`;

const ContactLink = styled.a`
  color: #00d4ff;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #0099cc;
  }
`;

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  background-color: #1a1a1a;
  border: 2px solid #333;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  transition: border-color 0.3s;
  &:focus {
    outline: none;
    border-color: #00d4ff;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  background-color: #1a1a1a;
  border: 2px solid #333;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: #00d4ff;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: #00d4ff;
  color: #0a0a0a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background-color: #0099cc;
    transform: translateY(-2px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #1a3a1a;
  border: 2px solid #00d4ff;
  color: #00ff00;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  margin-top: 1rem;
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
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
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
          <ContactItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <IconBox>
              <FaEnvelope />
            </IconBox>
            <ContactItemContent>
              <ContactLabel>Email</ContactLabel>
              <ContactLink href="mailto:your-email@example.com">
                your-email@example.com
              </ContactLink>
            </ContactItemContent>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <IconBox>
              <FaPhone />
            </IconBox>
            <ContactItemContent>
              <ContactLabel>Phone</ContactLabel>
              <ContactLink href="tel:+1234567890">+1 (234) 567-890</ContactLink>
            </ContactItemContent>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <IconBox>
              <FaMapMarkerAlt />
            </IconBox>
            <ContactItemContent>
              <ContactLabel>Location</ContactLabel>
              <ContactValue>India</ContactValue>
            </ContactItemContent>
          </ContactItem>
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
              placeholder="Your Name"
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
              Message sent! Check your email client. (Opens your default email)
            </SuccessMessage>
          )}
        </FormContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;