import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import dashBoardURL from "../images/dashboard-bg.mp4"
const DashBoard = () => {
  const navigate = useNavigate()

  const myStyle = {
    backgroundImage: "url(" + dashBoardURL + ")",
    backgroundSize: "cover",
    // height: "100vh",
    // opacity: 0.9
  }

  useEffect(() => {
    let userData = localStorage.getItem("user");

    if (!userData) {
      navigate('/')
    }
  })
  return (
    <div style={myStyle} className='bg-fixed flex flex-row justify-center items-center content-center h-screen w-full'>
      <video className='videoTag w-3/4 h-3/4' autoPlay loop muted>
        <source src={dashBoardURL} type='video/mp4' />
      </video>

    </div>
  )
}

export default DashBoard