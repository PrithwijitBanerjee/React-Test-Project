import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// Image imports are no longer needed for the new design
// import Facebook from "../assets/facebook.png";
// import Twitter from "../assets/Twitter.png";
// import Instagram from "../assets/instagram.png";
// import Youtube from "../assets/Youtube.png";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-column about-us">
                    <h3>About Us</h3>
                    <p>
                        Master game development with fun, interactive lessons! Create your
                        own Roblox and Scratch games while learning coding fundamentals.
                    </p>
                </div>

                <div className="footer-column links">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className="footer-column links">
                    <h3>Courses for Kids</h3>
                    <ul>
                        <li><a href="#">Roblox Game Design</a></li>
                        <li><a href="#">Advanced Roblox Scripting</a></li>
                        <li><a href="#">Scratch Game Design</a></li>
                    </ul>
                </div>

                <div className="footer-column links">
                    <h3>Courses for Adults</h3>
                    <ul>
                        <li><a href="#">Digital Skills for Educators</a></li>
                        <li><a href="#">Online Essential Skills</a></li>
                    </ul>
                </div>

                <div className="footer-column social">
                    <h3>Join Us</h3>
                    {/* Using react-icons to match the screenshot's outlined style */}
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>
            </div>
            
            {/* Added footer bottom section for the divider and copyright text */}
            <div className="footer-bottom">
                <hr className="footer-divider" />
                <p className="copyright-text">
                    Game X @ 2025. All rights reserved | Designed by Web Prism Dynamics
                </p>
            </div>
        </footer>
    );
};

export default Footer;