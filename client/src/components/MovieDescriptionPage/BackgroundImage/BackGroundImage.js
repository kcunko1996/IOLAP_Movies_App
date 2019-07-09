import React from 'react'
import './BackGroundImage.css'
export default function BackGroundImage({BackgroundLink}) {
  return (
   <div className="bg">
     <img src={BackgroundLink} alt="BackgroundLink" className='Image ' />
   </div>
  )
}
