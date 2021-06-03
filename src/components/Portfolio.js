import React from "react";
import { motion } from "framer-motion";
import './Portfolio.css';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
    type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <div class="container">
      <h5 className="heading">Projects</h5>
       </div>
      <div className="projects-container">
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://harshid9125.github.io/Travel_India/"
          >
            <div className="project-images" id="travel"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Travel Management</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/harshid9125/Travel_India"
              >
                <i className="FaGithub" title="github repo" id="github">
                  <FaGithub />
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://harshid9125.github.io/Travel_India/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ><FaExternalLinkAlt /></i>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/harshid9125/Stock-Market-Analysis-and-Prediction/blob/master/Stock_Market_Analysis_and_Prediction.ipynb"
          >
            <div className="project-images" id="stock"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Stock Predictions</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/harshid9125/Stock-Market-Analysis-and-Prediction"
              >
                <i className="fab fa-github" title="github repo" id="github">
                <FaGithub />
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/harshid9125/Stock-Market-Analysis-and-Prediction/blob/master/Stock_Market_Analysis_and_Prediction.ipynb"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ><FaExternalLinkAlt /></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Todo List */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://todo-taskbox.web.app/"
          >
            <div className="project-images" id="portfolio-react"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Portfolio</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Todo-List"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ><FaGithub /></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://todo-taskbox.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ><FaExternalLinkAlt /></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/harshid9125"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    
    </section>
  );
};

export default Portfolio;
