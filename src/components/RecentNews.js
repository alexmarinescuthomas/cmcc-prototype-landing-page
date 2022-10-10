import React from 'react';
import RecentNews1 from "../assets/RecentNews1.jpeg";
import RecentNews2 from "../assets/RecentNews2.jpg";
import RecentNews3 from "../assets/RecentNews3.jpg";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const RecentNews = () => {

  const slideLeft = () => {
      var slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
      var slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div className='section-highlight-container'>
        <header className='section-header'>
          <h2 className='section-header-title'>
            Recent News
          </h2>
        </header>
        <div className='relative flex items-center group'>
            <MdChevronLeft
                onClick={slideLeft} 
                className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block' 
                size={50} 
            />
                {/* <div id={'slider'} className='container'> */}
                <div id={'slider'} className='h-full w-full flex overflow-x-scroll whitespace-normal scroll-smooth scrollbar-hide relative'>
                  <section className='highlight-content'>
                    <div className='h-text'>
                      <div className='h-text-content'>
                        <a href='/' className='h-title'>Rehabilitation Certification</a>
                        <p className='h-subtitle'>
                          Oct 6th, 2022
                        </p>
                        <p className='h-subtitle'>
                          Receive a Rehabilitation and Functional Capacity Evaluation (FCE) Certificate
                        </p>
                      </div>
                      <div className='h-button-container'>
                        <a href='/' className='h-button-main'>Read More</a>
                      </div>
                    </div>
                    <div className='h-img'>
                      <img src={RecentNews1} alt="" />
                    </div>
                  </section>

                  <section className='highlight-content'>
                    <div className='h-text'>
                      <div className='h-text-content'>
                        <a href='/' className='h-title'>Congratulations to Dr. Anthony (Tony) Tibbles</a>
                        <p className='h-subtitle'>
                          Sep 6th, 2022
                        </p>
                        <p className='h-subtitle'>
                          Congratulations to Dr. Anthony (Tony) Tibbles who was awarded a Platinum Jubilee medal and pin...
                        </p>
                      </div>
                      <div className='h-button-container'>
                        <a href='/' className='h-button-main'>Read More</a>
                      </div>
                    </div>
                    <div className='h-img'>
                      <img src={RecentNews2} alt="" />
                    </div>
                  </section>

                  <section className='highlight-content'>
                    <div className='h-text'>
                      <div className='h-text-content'>
                        <a href='/' className='h-title'>The Role of Chiropractic in Opioid Use Reduction</a>
                        <p className='h-subtitle'>
                          Apr 28th, 2022
                        </p>
                        {/* <p className='h-subtitle'>
                          From March 2020 to April 2021, there were over 6,900 apparent opioid toxicity deaths in Canada and over 75,600 in the United States...
                        </p> */}
                      </div>
                      <div className='h-button-container'>
                        <a href='/' className='h-button-main'>Read More</a>
                      </div>
                    </div>
                    <div className='h-img'>
                      <img src={RecentNews3} alt="" />
                    </div>
                  </section>
                </div>
            <MdChevronRight
                onClick={slideRight} 
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block' 
                size={50} 
            />
        </div>

    </div>
  )
}

export default RecentNews