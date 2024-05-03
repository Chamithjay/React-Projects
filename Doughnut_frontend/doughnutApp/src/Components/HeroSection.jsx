import React from 'react'
import './css/slideshow.css'
import first from './Images/1.jpg';
import sec from './Images/2.jpg';
import third from './Images/3.jpg';
const HeroSection = () => {
     return (
        <div className='slides' >
            <div className='mySlides'>
                <img src={first}></img>
                <div className='caption'></div>
            </div>
            <div className='mySlides'>
                <img src={sec}></img>
                <div className='caption'></div>
            </div>
            <div className='mySlides'>
                <img src={third}></img>
                <div className='caption'></div>
            </div>
            
        </div>
  )
}

export default HeroSection