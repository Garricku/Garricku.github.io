import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/terms-of-service.md" download>Terms of Service</a>
        <a href="/privacy-policy.md" download>Privacy Policy</a>
        <a href="mailto:contact@phoenixcreations.com">Contact Us</a>
      </div>
      <p>&copy; 2024 Phoenix Creations. All rights reserved.</p>
    </footer>
  );
};

export default Footer;