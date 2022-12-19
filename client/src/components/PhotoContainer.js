import React from 'react'


const PhotoContainer = (props) => {
    const {name , imageURL} = props 
    return (
        <div className='flex flex-col items-center justify-center content-center'>
            <div className='text-center w-full' >
                {name}
            </div>
            <img className='h-1/2 w-1/2 ' src={imageURL}></img>
        </div>
    )
}

export default PhotoContainer