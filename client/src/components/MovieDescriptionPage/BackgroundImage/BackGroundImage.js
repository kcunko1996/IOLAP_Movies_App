import React from 'react'
import './BackGroundImage.css'
export default function BackGroundImage({BackgroundLink}) {
  return (
   <div>
     <img src={BackgroundLink} alt="BackgroundLink" className='Image ' />
   </div>
  )
}
