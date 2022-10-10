import React from 'react';
import cmccLogo from "../assets/cmccLogo.png";
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="site-footer">
        <div className="l-container-site-footer-container">
            
            <div className="site-footer-row-site-footer-row-navigation">
                <div className="site-footer-menu-col">
                    <h2 className="site-footer-menu-heading">
                        Accessibility
                    </h2>
                    <nav className="site-footer-nav">
                        <ol className="site-footer-nav-list">
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    Library
                                </a>
                            </li>
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    Office 365 IT Support
                                </a>
                            </li>
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    Supply Center & Bookstore
                                </a>
                            </li>
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    Faculty Directory
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="site-footer-menu-col">
                    <h2 className="site-footer-menu-heading">
                        About CMCC
                    </h2>
                    <nav className="site-footer-nav">
                        <ol className="site-footer-nav-list">
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    CMCCSafe
                                </a>
                            </li>
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    Careers at CMCC
                                </a>
                            </li>
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    Events
                                </a>
                            </li>
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    News
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="site-footer-menu-col">
                    <h2 className="site-footer-menu-heading">
                        Get In Touch
                    </h2>
                    <nav className="site-footer-nav">
                        <ol className="site-footer-nav-list">
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    Media Room
                                </a>
                            </li>
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    BeSafe
                                </a>
                            </li>
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    Contact Us
                                </a>
                            </li>
                            <li className="footer-one-item">
                                <a href="/" className="footer-one-action">
                                    Privacy
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className='hidden lg:block'>
                <div className="site-footer-row-site-footer-row-secondary">
                    <div className="site-footer-copyright">
                        <p>
                            © 2022 Canadian Memorial Chiropractic College All rights reserved
                        </p>
                    </div>
                    <div className="site-footer-logo">
                        <a href='/'>
                            <img className="footer-logo-and-location" src={cmccLogo} alt="CMCC" />
                            {/* <p className="footer-logo-and-location">6100 Leslie Street</p>
                            <p className="footer-logo-and-location">Toronto ON M2H 3J1</p>
                            <p className="footer-logo-and-location">416 482 2340</p> */}
                        </a>
                    </div>
                    <div className="site-footer-social">
                        <div className="social-follow">
                            <ul className="social-follow-list">
                                <li className="social-follow-item-social-follow-item">
                                    <a className="social-follow-anchor" href="/">
                                        <AiFillFacebook size={20} className="social-icon" />
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li className="social-follow-item-social-follow-item">
                                    <a className="social-follow-anchor" href="/">
                                        <AiOutlineTwitter size={20} className="social-icon" />
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li className="social-follow-item-social-follow-item">
                                    <a className="social-follow-anchor" href="/">
                                        <AiFillInstagram size={20} className="social-icon" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <li className="social-follow-item-social-follow-item">
                                    <a className="social-follow-anchor" href="/">
                                        <AiFillYoutube size={20} className="social-icon" />
                                        <span>YouTube</span>
                                    </a>
                                </li>
                                {/* <li className="social-follow-item-social-follow-item">
                                    <a className="social-follow-anchor" href="/">
                                        <span>CMCC Safe</span>
                                    </a>
                                </li>
                                <li className="social-follow-item-social-follow-item">
                                    <a className="social-follow-anchor" href="/">
                                        <span>Campus Status</span>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;