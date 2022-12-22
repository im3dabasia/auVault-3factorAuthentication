import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import PhotoContainer from '../components/PhotoContainer'
import finalvideo from "../images/finalvideo.mp4"
import profileImg1 from "../images/profile-img.png"
import photo1 from "../images/1.png"
import photo2 from "../images/2.png"
import photo3 from "../images/3.png"
import bgImage from "../images/ISP 070 Cyber Security.png"

const LandingPage = () => {


    const navigate = useNavigate();
    return (
        <div   className='font bg-black flex flex-row items-center h-screen w-screen text-neutral-50'>
            <div className='h-screen w-1/2 items-center justify-center content-center '>
                <div className='text-2xl flex flex-row items-center content-center justify-center h-full w-full'>
                    <video className='videoTag w-3/4 h-3/4' autoPlay loop muted>
                        <source src={finalvideo} type='video/mp4' />
                    </video>    
                </div>
            </div>
            <div className='flex flex-col h-screen w-1/2 items-center justify-center content-center mt-30    '>
                <div className='w-full h-1/2 flex flex-col items-start content-center justify-center ml-20'>
                    <div className='text-7xl'>
                        ISP070
                    </div>
                    <div className='text-7xl'>
                        CYBERSECURITY
                    </div>
                    <div className='text-2xl '>
                        Under the supervision of Prof. Kuntal Patel
                    </div>
                    <div>
                        <div className='text-2xl flex flex-row items-center content-center justify-center w-full '>
                            <button className={`bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-2  border-b-4 border-red-700 hover:border-red-500 rounded mt-4 w-full mx-2 `} onClick={() => navigate("/register")}>
                                SignUp
                            </button>
                            <button className={`bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-2 border-b-4 border-red-700 hover:border-red-500 rounded mt-4 w-full mx-2 `} onClick={() => navigate("/login")}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
                <div className='h-1/2 flex flex-col items-center content-center justify-end'>
                    <div className='text-2xl h-full flex flex-row gap-x-2 items-center content-center justify-center'>
                        <PhotoContainer name="KULDIP GOHIL" imageURL={photo2}></PhotoContainer>
                        <PhotoContainer name="ESHAAN DABASIYA" imageURL={photo3}></PhotoContainer>
                        <PhotoContainer name="URVISH MAKWANA" imageURL={photo1}></PhotoContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage