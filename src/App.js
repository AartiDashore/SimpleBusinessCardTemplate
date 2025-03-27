import React from "react";
import { HashRouter } from "react-router-dom";
import "./BusinessCard.css"; // CSS for styling the card

const BusinessCard = () => {
  return (
    <BrowserRouter basename="/SimpleBusinessCardTemplate">
      <div className="business-card">
      <div className="card-header">
        <h1>John Doe</h1>
        <p className="title">Software Engineer</p>
      </div>
      <div className="card-body">
        <p>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 234-567-890</a></p>
        <p>Website: <a href="https://www.johndoe.dev" target="_blank" rel="noopener noreferrer">www.johndoe.dev</a></p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.png" alt="GitHub" />
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

