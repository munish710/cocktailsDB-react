import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" footer">
      <div className="section footer-center">
        <p>
          Made with <span className="code">&lt;/&gt;</span> by Munish Thakur
        </p>
        <div className="footer-icons">
          <a
            href="https://github.com/munish710"
            target="_blank"
            className="footer-icon"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/munish-thakur-a14078190/"
            target="_blank"
            className="footer-icon"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://twitter.com/munish710"
            target="_blank"
            className="footer-icon"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
