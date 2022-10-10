import React from 'react';
import admissionBanner from "../assets/admissionBanner.jpg";

const Students = () => {
  return (
    <div>

        <div style={{ marginTop: "40px" }} />

        <header className='section-header'>
            <h2 className='section-header-title'>
                Students
            </h2>
        </header>

        <section className="students-banner">
            <div className="students-description-container">
                <div className="students-description-content">
                    <div className="students-desc">
                        <p>
                            Everything students and prospective students need to know about the profession, our curriculum, our campus, student life, and the admissions process.
                        </p>
                        <div style={{ marginTop: "20px", marginBottom: "20px" }} />
                        <p>
                            Thank you for your interest in applying to CMCC. The application for 2023-2024 general entry admission is available until November 15, 2022.
                        </p>
                        <div style={{ marginTop: "20px", marginBottom: "20px" }} />
                    </div>
                </div>
                <div className="students-button-container">
                    <a href="/" className="students-button-main">
                        Contact Admissions
                    </a>
                </div>
            </div>
            <div className="students-image-container">
                <img className="students-image-container-img" src={admissionBanner} alt="admissionsBanner" />
            </div>
        </section>
    </div>
  )
}

export default Students;