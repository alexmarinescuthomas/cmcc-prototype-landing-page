import React, { useState } from 'react';
import cmccLogo from "../assets/cmccLogo.png";
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa'; 

const NavBar = () => {
    const [ isAdmissionsClicked, setIsAdmissionsClicked ] = useState(false);
    const [ isAcademicProgramsClicked, setIsAcademicProgramsClicked ] = useState(false);
    const [ isStudentExperienceClicked, setStudentExperienceClicked ] = useState(false);
    const [ isResearchClicked, setResearchClicked ] = useState(false);
    const [ isClinicsClicked, setClinicsClicked ] = useState(false);
    const [ isAlumniClicked, setAlumniClicked ] = useState(false);
    const [ isAboutClicked, setAboutClicked ] = useState(false);
    const [ isLibraryClicked, setLibraryClicked ] = useState(false);
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    const itemClass = "transition ease-in-out duration-300 border-b-4 border-transparent hover:border-purple-200";
    return (
        <div>
            <div className="content">

                {/* Not mobile icon */}
                <ul className='hidden lg:flex'>
                    <li>
                        <img src={cmccLogo} alt="" />
                        <p>Canadian Memorial Chiropractic College</p>
                    </li>
                </ul>
                {/* Mobile icon */}
                <ul className='flex lg:hidden'>
                    <li>
                        <img src={cmccLogo} alt="" />
                    </li>
                </ul>

                <ul className='hidden lg:flex'>
                    <li className={itemClass} onClick={()=> {
                                setIsAdmissionsClicked(!isAdmissionsClicked);
                                setIsAcademicProgramsClicked(false);
                                setStudentExperienceClicked(false);
                                setResearchClicked(false);
                                setClinicsClicked(false);
                                setAlumniClicked(false);
                                setAboutClicked(false);
                                setLibraryClicked(false)
                            }
                        }>
                        <p>Admissions</p>
                    </li>
                    <li className={itemClass} onClick={()=> {
                                setIsAdmissionsClicked(false);
                                setIsAcademicProgramsClicked(!isAcademicProgramsClicked);
                                setStudentExperienceClicked(false);
                                setResearchClicked(false);
                                setClinicsClicked(false);
                                setAlumniClicked(false);
                                setAboutClicked(false);
                                setLibraryClicked(false)
                            }
                        }>
                        <p>Academic Programs</p>
                    </li>
                    <li className={itemClass} onClick={()=> {
                                setIsAdmissionsClicked(false);
                                setIsAcademicProgramsClicked(false);
                                setStudentExperienceClicked(!isStudentExperienceClicked);
                                setResearchClicked(false);
                                setClinicsClicked(false);
                                setAlumniClicked(false);
                                setAboutClicked(false);
                                setLibraryClicked(false)
                            }
                        }>
                        <p>Student Experience</p>
                    </li>
                    <li className={itemClass} onClick={()=> {
                                setIsAdmissionsClicked(false);
                                setIsAcademicProgramsClicked(false);
                                setStudentExperienceClicked(false);
                                setResearchClicked(!isResearchClicked);
                                setClinicsClicked(false);
                                setAlumniClicked(false);
                                setAboutClicked(false);
                                setLibraryClicked(false)
                            }
                        }>
                        <p>Research</p>
                    </li>
                    <li className={itemClass} onClick={()=> {
                                setIsAdmissionsClicked(false);
                                setIsAcademicProgramsClicked(false);
                                setStudentExperienceClicked(false);
                                setResearchClicked(false);
                                setClinicsClicked(!isClinicsClicked);
                                setAlumniClicked(false);
                                setAboutClicked(false);
                                setLibraryClicked(false)
                            }
                        }>
                        <p>Clinics</p>
                    </li>
                    <li className={itemClass} onClick={()=> {
                                setIsAdmissionsClicked(false);
                                setIsAcademicProgramsClicked(false);
                                setStudentExperienceClicked(false);
                                setResearchClicked(false);
                                setClinicsClicked(false);
                                setAlumniClicked(!isAlumniClicked);
                                setAboutClicked(false);
                                setLibraryClicked(false)
                            }
                        }>
                        <p>Alumni & Friends</p>
                    </li>
                    <li className={itemClass} onClick={()=> {
                                setIsAdmissionsClicked(false);
                                setIsAcademicProgramsClicked(false);
                                setStudentExperienceClicked(false);
                                setResearchClicked(false);
                                setClinicsClicked(false);
                                setAlumniClicked(false);
                                setAboutClicked(!isAboutClicked);
                                setLibraryClicked(false)
                            }
                        }>
                        <p>About CMCC</p>
                    </li>
                    <li className={itemClass} onClick={()=> {
                                setIsAdmissionsClicked(false);
                                setIsAcademicProgramsClicked(false);
                                setStudentExperienceClicked(false);
                                setResearchClicked(false);
                                setClinicsClicked(false);
                                setAlumniClicked(false);
                                setAboutClicked(false);
                                setLibraryClicked(!isLibraryClicked)
                            }
                        }>
                        <p>Library</p>
                    </li>
                    <li>
                        <FaSearch />
                    </li>
                </ul>
                
                {/* Hamburger menu */}
                <div onClick={handleClick} className='flex lg:hidden z-10 cursor-pointer p-6'>
                    {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
                </div>

                {/* Mobile View */}
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0e0e0e] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>
                        <p>Admissions</p>
                    </li>
                    <li className='py-6 text-4xl'>
                        <p>Academic Programs</p>
                    </li>
                    <li className='py-6 text-4xl'>
                        <p>Student Experience</p>
                    </li>
                    <li className='py-6 text-4xl'>
                        <p>Research</p>
                    </li>
                    <li className='py-6 text-4xl'>
                        <p>Clinics</p>
                    </li>
                    <li className='py-6 text-4xl'>
                        <p>Alumni & Friends</p>
                    </li>
                    <li className='py-6 text-4xl'>
                        <p>About CMCC</p>
                    </li>
                    <li className='py-6 text-4xl'>
                        <p>Library</p>
                    </li>
                </ul>
            </div>

            <ul className='hidden lg:flex'>
                {
                    isAdmissionsClicked && (
                        <div className="content-admissions">
                            <ul>
                                <li className="p-2">
                                    <p>Admissions Overview</p>
                                </li>
                                <li className="p-2">
                                    <p>Academic Calendar</p>
                                </li>
                                <li className="p-2">
                                    <p>APPLY NOW</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Info Sessions & Grad Fairs</p>
                                </li>
                                <li className="p-2">
                                    <p>Is Chiropractic for you?</p>
                                </li>
                                <li className="p-2">
                                    <p>Evidence Based Program</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Chiropractic Today</p>
                                </li>
                                <li className="p-2">
                                    <p>International Students</p>
                                </li>
                                <li className="p-2">
                                    <p>Pathways</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Tuition & Fees</p>
                                </li>
                                <li className="p-2">
                                    <p>Transfers</p>
                                </li>
                                <li className="p-2">
                                    <p>Admissions Toolkit</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Awards & Scholarships</p>
                                </li>
                                <li className="p-2">
                                    <p>Book a Tour</p>
                                </li>
                                <li className="p-2">
                                    <p>Government Financial Aid</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
                {
                    isAcademicProgramsClicked && (
                        <div className="content-admissions">
                            <ul>
                                <li className="p-2">
                                    <p>Academic Programs Overview</p>
                                </li>
                                <li className="p-2">
                                    <p>Academic Calendar</p>
                                </li>
                                <li className="p-2">
                                    <p>Academic Departments</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Academic Quality Assurance Framework</p>
                                </li>
                                <li className="p-2">
                                    <p>Teaching Labs</p>
                                </li>
                                <li className="p-2">
                                    <p>Evidence-Informed Curriculum</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Library</p>
                                </li>
                                <li className="p-2">
                                    <p>Doctor of Chiropractic Program</p>
                                </li>
                                <li className="p-2">
                                    <p>Curriculum by Year</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Chiropractic Residency Programs</p>
                                </li>
                                <li className="p-2">
                                    <p>Continuing Education</p>
                                </li>
                                <li className="p-2">
                                    <p>Faculty Directory</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
                {
                    isStudentExperienceClicked && (
                        <div className="content-admissions">
                            <ul>
                                <li className="p-2">
                                    <p>Student Experience Overview</p>
                                </li>
                                <li className="p-2">
                                    <p>Recreation & Student Life</p>
                                </li>
                                <li className="p-2">
                                    <p>Students' Council</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Awards & Scholarships</p>
                                </li>
                                <li className="p-2">
                                    <p>Tuition & Fees</p>
                                </li>
                                <li className="p-2">
                                    <p>Government Financial Aid</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Health & Wellness</p>
                                </li>
                                <li className="p-2">
                                    <p>Campus Facilities</p>
                                </li>
                                <li className="p-2">
                                    <p>Campus Health</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
                {
                    isResearchClicked && (
                        <div className="content-admissions">
                            <ul>
                                <li className="p-2">
                                    <p>Research Overview</p>
                                </li>
                                <li className="p-2">
                                    <p>Labs and Innovation</p>
                                </li>
                                <li className="p-2">
                                    <p>Current Research Projects</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Office of Research Administration</p>
                                </li>
                                <li className="p-2">
                                    <p>Ontario Tech-CMCC CDPR</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
                {
                    isClinicsClicked && (
                        <div className="content-admissions">
                            <ul>
                                <li className="p-2">
                                    <p>Clinics Overview</p>
                                </li>
                                <li className="p-2">
                                    <p>Patient Experience Survey</p>
                                </li>
                                <li className="p-2">
                                    <p>Meet Our Clinicians</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Telehealth</p>
                                </li>
                                <li className="p-2">
                                    <p>Intern Experience</p>
                                </li>
                                <li className="p-2">
                                    <p>Our Services</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Clinic Locations</p>
                                </li>
                                <li className="p-2">
                                    <p>Patient Information</p>
                                </li>
                                <li className="p-2">
                                    <p>Cost for Treatment</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
                {
                    isAlumniClicked && (
                        <div className="content-admissions">
                            <ul>
                                <li className="p-2">
                                    <p>Primary Contact Magazine</p>
                                </li>
                                <li className="p-2">
                                    <p>Events</p>
                                </li>
                                <li className="p-2">
                                    <p>Membership & Perks</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Practice Opportunities Listing</p>
                                </li>
                                <li className="p-2">
                                    <p>Give to CMCC</p>
                                </li>
                                <li className="p-2">
                                    <p>Request Documents</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
                {
                    isAboutClicked && (
                        <div className="content-admissions">
                            <ul>
                                <li className="p-2">
                                    <p>About CMCC</p>
                                </li>
                                <li className="p-2">
                                    <p>Leadership</p>
                                </li>
                                <li className="p-2">
                                    <p>Policies</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Contact Us</p>
                                </li>
                                <li className="p-2">
                                    <p>BeSafe</p>
                                </li>
                                <li className="p-2">
                                    <p>Campus Health</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
                {
                    isLibraryClicked && (
                        <div className="content-admissions">
                            <ul>
                                <li className="p-2">
                                    <p>Library</p>
                                </li>
                                <li className="p-2">
                                    <p>E-Resources Portal</p>
                                </li>
                                <li className="p-2">
                                    <p>Clinical Databases</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Anatomy & Clinical Examination</p>
                                </li>
                                <li className="p-2">
                                    <p>Research Guides</p>
                                </li>
                                <li className="p-2">
                                    <p>Citing Your Work</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="p-2">
                                    <p>Copyright</p>
                                </li>
                                <li className="p-2">
                                    <p>Featured eBooks</p>
                                </li>
                                <li className="p-2">
                                    <p>Document Delivery</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </ul>

        </div>
    )
}

export default NavBar;