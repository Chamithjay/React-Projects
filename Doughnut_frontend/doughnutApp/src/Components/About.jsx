import React from 'react'
import './css/about.css'
import donut from './d.jpg';
const About = () => {
    return (
        <div className='donut'>
            <a><img src={donut}></img></a>
            <div className='text'>
                <h1>A brief story of our love affair with donuts!</h1>
                <a>Our donuts are perfect for any ocassion, whether you're grabbing a quick breakfast on the go or ordering a dozen for a special event.</a>
            </div>
            


        </div>
  )
}

export default About