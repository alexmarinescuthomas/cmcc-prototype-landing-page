import React from 'react';
import ImageGallery from '../assets/ImageGallery.jpg';
import Tour from '../assets/Tour.jpg';
import Survey from '../assets/Survey.png';
import ContinuingEducation from '../assets/ContinuingEducation.jpg'; 
import Bookstore from '../assets/Bookstore.JPG';
import Library from '../assets/Library.jpg';
import AlumniFriends from '../assets/AlumniFriends.jpg';
import Events from '../assets/Events.jpg';

const AboutCMCC = () => {
  return (
    <div className='section-highlight-container'>
        <header className='section-header'>
            <h2 className='section-header-title'>
                About CMCC
            </h2>
        </header>

        <div className="about-container">
            <div className="about-description">
                <p>
                    {`CMCC is an academic institution offering undergraduate 
                    degree and postgraduate and continuing education programs 
                    in chiropractic campus, student life, and the admissions 
                    process.`}
                </p>
            </div>
        </div>

        <section className="about-tiles">
            <div className="about-slider">
                
                <div className="about-list">
                    <div className="about-track">
                        <div className="about-active">
                            <div className="about-grid">
                                <a href='/'>
                                    <span className="box-img">
                                        <img src={ImageGallery} alt="" className="about-image" />
                                    </span>
                                    <span className="box-title">
                                        Image Gallery
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="about-active">
                            <div className="about-grid">
                                <a href='/'>
                                    <span className="box-img">
                                        <img src={Tour} alt="" className="about-image" />
                                    </span>
                                    <span className="box-title">
                                        Virtual Tour
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="about-active">
                            <div className="about-grid">
                                <a href='/'>
                                    <span className="box-img">
                                        <img src={Survey} alt="" className="about-image" />
                                    </span>
                                    <span className="box-title">
                                        Patient Experience Survey
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="about-active">
                            <div className="about-grid">
                                <a href='/'>
                                    <span className="box-img">
                                        <img src={ContinuingEducation} alt="" className="about-image" />
                                    </span>
                                    <span className="box-title">
                                        Continuing Education
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-list">
                    <div className="about-track">
                        <div className="about-active">
                            <div className="about-grid">
                                <a href='/'>
                                    <span className="box-img">
                                        <img src={Bookstore} alt="" className="about-image" />
                                    </span>
                                    <span className="box-title">
                                        Bookstore
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="about-active">
                            <div className="about-grid">
                                <a href='/'>
                                    <span className="box-img">
                                        <img src={Library} alt="" className="about-image" />
                                    </span>
                                    <span className="box-title">
                                        Library
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="about-active">
                            <div className="about-grid">
                                <a href='/'>
                                    <span className="box-img">
                                        <img src={AlumniFriends} alt="" className="about-image" />
                                    </span>
                                    <span className="box-title">
                                        Alumni & Friends
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="about-active">
                            <div className="about-grid">
                                <a href='/'>
                                    <span className="box-img">
                                        <img src={Events} alt="" className="about-image" />
                                    </span>
                                    <span className="box-title">
                                        Events
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <div style={{ marginBottom: "100px" }}/>
    </div>
  )
}

export default AboutCMCC;