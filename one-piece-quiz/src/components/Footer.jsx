import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/terms-of-service.md" download>Terms of Service</a>
        <a href="/privacy-policy.md" download>Privacy Policy</a>
        <a href="mailto:contact@phoenixcreations.com">Contact Us</a>
        <a href="/about-us">About Us</a>
        <a href="/sitemap">Site Map</a>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/phoenixcreations" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com/phoenixcreations" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com/phoenixcreations" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <p>&copy; 2024 Phoenix Creations. All rights reserved.</p>
    </footer>
  );
};

export default Footer;