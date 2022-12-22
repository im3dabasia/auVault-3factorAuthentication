import React from 'react'

const PhotoContainer = (props) => {
    const {name , imageURL} = props 
    return (
        <div className='flex flex-col items-center justify-center content-center'>
            <img className='h-1/2 w-1/2' src={imageURL}></img>
            <div className='text-center w-full  mt-4' >
                {name}
            </div>
        </div>
    )
}

export default PhotoContainer