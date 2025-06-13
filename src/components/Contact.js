import React, { useState } from 'react';
import './Contact.css';
import AnimatedLine from './AnimatedLine';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>I'm currently available for freelance work or full-time positions. 
                 Drop me a line if you'd like to discuss potential collaborations.</p>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link">
                  📧 your.email@example.com
                </a>
                <a href="https://github.com/yourusername" className="contact-link">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" className="contact-link">
                  LinkedIn
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
        <AnimatedLine />
      </section>
    </>
  );
}

export default Contact;