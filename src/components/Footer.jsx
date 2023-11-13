import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const githubProfile = 'https://github.com/your-github-profile';
  const linkedinProfile = 'https://www.linkedin.com/in/your-linkedin-profile';
  const stackOverflowProfile = 'https://stackoverflow.com/users/your-stackoverflow-profile';
  const twitterProfile = 'https://twitter.com/your-twitter-profile';

  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Connect with me:</h5>
            <div className="social-icons">
              <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaGithub />
              </a>
              <a href={linkedinProfile} target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaLinkedin />
              </a>
              <a href={stackOverflowProfile} target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaStackOverflow />
              </a>
              <a href={twitterProfile} target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
