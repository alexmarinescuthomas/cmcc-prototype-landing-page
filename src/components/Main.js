import React from 'react';
import videoBackGround from "../assets/videoBackground.mp4";
import AboutCMCC from './AboutCMCC';
import COVID from './COVID';
import Footer from './Footer';
import NavBar from './NavBar';
import RecentNews from './RecentNews';
import Students from './Students';
import Title from './Title';
import { ImAccessibility } from 'react-icons/im';

const Main = () => {
  return (
    <div className="main">
        <div className="overlay"></div>
        <video src={videoBackGround} loop muted autoPlay />
        <NavBar />
        <Title />
        <div className='hidden lg:block'>
          <COVID />
          <Students />
          <RecentNews />
          <AboutCMCC />
        </div>
        <Footer />
        <div className='accessibility-btn'>
          <ImAccessibility size={30} />
        </div>
    </div>
  )
}

export default Main