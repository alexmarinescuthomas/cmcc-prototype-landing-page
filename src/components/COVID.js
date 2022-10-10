import React from 'react';
import covidImage1 from '../assets/covidImage1.webp';
import covidImage2 from '../assets/covidImage2.webp';
import covidImage3 from '../assets/covidImage3.webp';

const COVID = () => {
  return (
    <div>

        <div style={{ marginTop: "40px" }} />

        <header className='section-header'>
            <h2 className='section-header-title'>
                COVID News
            </h2>
        </header>

        <section className="covid-banner">
            <div className="covid-3-boxes">
                <div className="covid-box">
                    <a href="/">
                        <span className="covid-img">
                            <img className="covid-img-box" alt="covidImage1" src={covidImage1} />
                        </span>
                        <span className="covid-title">Guidance</span>
                    </a>
                    <span className="covid-box-desc">
                        Symptoms & Exposure, Absence Reporting, and more
                    </span>
                    <span className="covid-box-buttons">
                        <span className="covid-box-buttons-container">
                            <a href="/" className="covid-box-buttons-main">
                                Learn More
                            </a>
                        </span>
                    </span>
                </div>
                <div className="covid-box">
                    <a href="/">
                        <span className="covid-img">
                            <img className="covid-img-box" alt="covidImage1" src={covidImage2} />
                        </span>
                        <span className="covid-title">Protocols</span>
                    </a>
                    <span className="covid-box-desc">
                        Learn about our latest COVID protocol information 
                    </span>
                    <span className="covid-box-buttons">
                        <span className="covid-box-buttons-container">
                            <a href="/" className="covid-box-buttons-main">
                                Learn More
                            </a>
                        </span>
                    </span>
                </div>
                <div className="covid-box">
                    <a href="/">
                        <span className="covid-img">
                            <img className="covid-img-box" alt="covidImage1" src={covidImage3} />
                        </span>
                        <span className="covid-title">Announcements</span>
                    </a>
                    <span className="covid-box-desc">
                        Access all past announcements regarding COVID-19 
                    </span>
                    <span className="covid-box-buttons">
                        <span className="covid-box-buttons-container">
                            <a href="/" className="covid-box-buttons-main">
                                Learn More
                            </a>
                        </span>
                    </span>
                </div>
            </div>
        </section>

    </div>
  )
}

export default COVID;