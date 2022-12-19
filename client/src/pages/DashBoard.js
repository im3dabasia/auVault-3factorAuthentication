import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
    const navigate = useNavigate()

    useEffect(() =>{
        let userData = localStorage.getItem("user");

        if(!userData){
            navigate('/')
        }
    })
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard