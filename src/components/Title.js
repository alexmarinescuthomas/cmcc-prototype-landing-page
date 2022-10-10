import React, { useState } from 'react';

const Title = () => {
    const [ isHovered, setIsHovered ] = useState(false);

    // const itemClass = "transition ease-in-out duration-300 border-b-4 border-transparent hover:border-purple-200"
    return (
        <div className='title-main-title' onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)} >
            <div className='hidden lg:flex'>
                {
                    (isHovered) ? (
                        <section className='title-highlight-content'>
                            <div className='title-text'>
                                <div className='title-text-content'>
                                    <a href='/' className='h-title'>
                                        NOW ACCEPTING APPLICATIONS FOR FALL 2023
                                    </a>
                                    <p className='title-subtitle'>
                                        Application deadline November 15, 2022
                                    </p>
                                </div>
                                <div className='title-button-container'>
                                    <a href='/' className='title-button-main'>APPLY NOW</a>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section className='title-highlight-content'>
                            <div className='nohover-title-text'>
                                <div className='title-text-content'>
                                    <a href='/' className='h-title'>
                                        NOW ACCEPTING APPLICATIONS FOR FALL 2023
                                    </a>
                                    <p className='title-subtitle'>
                                        Application deadline November 15, 2022
                                    </p>
                                </div>
                            </div>
                        </section>
                    )
                }
            </div>
        </div>
    )
}

export default Title;