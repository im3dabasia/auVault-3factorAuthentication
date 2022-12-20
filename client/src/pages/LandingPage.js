import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import PhotoContainer from '../components/PhotoContainer'

import profileImg1 from "../images/profile-img.png"
const LandingPage = () => {

    const navigate = useNavigate();
    return (
        <div className='flex flex-col    items-center 	  h-screen w-screen	'>
            <div className=' h-1/4 flex flex-col items-center content-center justify-start'>
                <div className='text-9xl'>
                    ISP070 - CYBERSECURITY
                </div>
                <div className='text-2xl'>
                    Under the supervision of Prof. Kuntal Patel
                </div>
            </div>
            <div className=' h-1/4 flex flex-row gap-x-8 items-center content-center justify-center'>
                <div className='text-2xl flex flex-row items-center content-center justify-center'>
                    <img className='h-1/2 w-1/2' src={"https://ahduni.edu.in/site/assets/files/1/default_logo_final_png.png"}></img>
                </div>
                <div className='text-2xl flex flex-row items-center content-center justify-center'>

                    <button class={`bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4  border-b-4 border-red-700 hover:border-red-500 rounded mt-4 w-full mx-2 `} onClick={() => navigate("/register")}>
                        SignUp
                    </button>
                    <button class={`bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mt-4 w-full mx-2 `} onClick={() => navigate("/login")}>
                        Login
                    </button>
                </div>
                <div className='text-2xl flex flex-row items-center content-center justify-center'>
                    <img className='h-1/2 w-1/2' src={"https://ahduni.edu.in/site/assets/files/1/default_logo_final_png.png"}></img>
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