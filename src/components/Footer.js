import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
    type: "spring",
    },
  },
};

const Footer = () => {
  return (
    <div class="container">
    <div class="row d-flex">    
    <section className="contact-container" name="contact" id="contact">

     <div class="main"><h1 className="heading">Contact</h1></div>
        <div className="cards-container">
        {/* Card 1 - Email */}
        {/* <div className="">*/}
        <motion.div 
          variants={boxVariants}
          whileHover="hover"
          className="cards">
        
          <div className="contact-icons">
            <i className="fas fa-envelope"><FaEnvelope /></i>
          </div>
          <div className="contact-text">
            <span>Gmail</span>
          </div>
          <div className="contact-links">
            <span>harshidkeraliya@gmail.com</span>
          </div>
          </motion.div>

        {/* Card 2 - Social Media */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"><FaGlobe /></i>
          </div>
          <div className="contact-text">
            <span>Social Media</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/harshid9125"
            >
              <i className="fab fa-github" title="github" id="github"><FaGithub /></i>
            </a>

            {/* facebook */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/harshid.keraliya.54/ "
            >
              <i className="fab fa-facebook" title="facebook" id="facebook"><FaFacebook /></i>
            </a>

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/harshid-keraliya-5974a6169/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"><FaLinkedin /></i>
            </a>

            {/* Twitter */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/HarshidKeraliya"
            >
              <i className="fab fa-twitter" title="twitter" id="twitter"><FaTwitter /></i>
            </a>

            {/* Instagram */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/harshid_patel_01/"
            >
              <i
                className="fab fa-instagram"
                title="instagram"
                id="instagram"
              ><FaInstagram /></i>
            </a>
          </div>

          </motion.div>
    
        

        {/* Card 3 - Phone */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="cards">
          <div className="contact-icons">
            <i className="fas fa-phone"><FaPhone /></i>
          </div>
          <div className="contact-text">
            <span>Phone</span>
          </div>
          <div className="contact-links">
            <span>(+91) 635 3858007 </span>
          </div>
       
      </motion.div>
      </div>

    </section>
    </div>
    </div>
  );
};

export default Footer;
