import React from 'react';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form action="https://formspree.io/f/{your-form-id}" method="POST">
        <label htmlFor="name">
          <FaUser className="icon" /> Name:
        </label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">
          <FaEnvelope className="icon" /> Email:
        </label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">
          <FaComment className="icon" /> Message:
        </label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">
          <FaPaperPlane className="icon" /> Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
