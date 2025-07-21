import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';
import AnimatedLine from './AnimatedLine';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
import { IoCheckmarkCircle, IoCloseCircle, IoTimeOutline } from 'react-icons/io5';

const leftVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const rightVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const isMobile = window.innerWidth <= 700;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // Track success/error/timeout
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const modalRef = useRef(null); // Reference for modal focus management

  // Clear status message after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(''), 5000);
      // Focus modal when it appears for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch('https://formspree.io/f/xblyyonl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        const errorData = await response.json();
        console.error('Submission failed:', response.status, response.statusText, errorData);
        throw new Error(errorData.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setStatus(error.name === 'AbortError' ? 'timeout' : 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setStatus('');
  };

  // Handle Escape key to close modal
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && status) {
      closeModal();
    }
  };

  if (isMobile) {
    return (
      <section
        id="contact"
        className="contact-section"
      >
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                I'm currently available for freelance work or full-time positions.
                Drop me a line if you’d like to discuss potential collaborations.
              </p>
              <div className="contact-links">
                <a
                  href="mailto:joelrayton.dev@gmail.com"
                  className="contact-link icon-link"
                  aria-label="Email"
                >
                  <HiMail size={28} />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://github.com/SenpaiJoeru05"
                  className="contact-link icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <SiGithub size={28} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/joel-rayton"
                  className="contact-link icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin size={28} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  name="_replyto"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows="5"
                ></textarea>
              </div>
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm currently available for freelance work or full-time positions.
              Drop me a line if you’d like to discuss potential collaborations.
            </p>
            <div className="contact-links">
              <a
                href="mailto:joelrayton.dev@gmail.com"
                className="contact-link icon-link"
                aria-label="Email"
              >
                <HiMail size={28} />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://github.com/SenpaiJoeru05"
                className="contact-link icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <SiGithub size={28} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/joel-rayton"
                className="contact-link icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={28} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                name="_replyto"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows="5"
              ></textarea>
            </div>
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      {status && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal ${status === 'success' ? 'modal-success' : 'modal-error'}`}
            role="dialog"
            aria-labelledby="modal-title"
            ref={modalRef}
            tabIndex="-1"
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-icon">
              {status === 'success' && <IoCheckmarkCircle size={48} />}
              {status === 'error' && <IoCloseCircle size={48} />}
              {status === 'timeout' && <IoTimeOutline size={48} />}
            </div>
            <h3 id="modal-title" className="modal-title">
              {status === 'success' && 'Thank You!'}
              {status === 'error' && 'Oops, Something Went Wrong'}
              {status === 'timeout' && 'Connection Timeout'}
            </h3>
            <p className="modal-message">
              {status === 'success' && 'Your message has been sent successfully. I’ll get back to you soon!'}
              {status === 'error' && 'Failed to send your message. Please try again later.'}
              {status === 'timeout' && 'The request timed out. Please check your connection and try again.'}
            </p>
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;