import React from 'react'
import PhotoContainer from '../components/PhotoContainer'

import profileImg1 from "../images/profile-img.png"
const LandingPage = () => {
    return (
        <div className='flex flex-col    items-center 	  h-screen w-screen	'>
            <div className=' h-1/2 flex flex-col items-center content-center justify-start'>
                <div className='text-9xl'>
                    ISP070 - CYBERSECURITY
                </div>
                <div className='text-2xl'>
                    Under the supervision of Prof. Kuntal Patel
                </div>
            </div>
            <div className='text-4xl h-1/2 flex flex-row gap-x-8 items-center content-center justify-center'>
                <PhotoContainer name="KULDIP GOHIL" imageURL={profileImg1}></PhotoContainer>
                <PhotoContainer name="ESHAAN DABASIYA" imageURL={profileImg1}></PhotoContainer>
                <PhotoContainer name="URVISH MAKWANA" imageURL={profileImg1}></PhotoContainer>
            </div>
        </div>
    )
}

export default LandingPage