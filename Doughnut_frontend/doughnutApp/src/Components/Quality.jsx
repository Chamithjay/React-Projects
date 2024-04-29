import React from 'react'
import './css/Quality.css'
import donut from './donut2.jpg';
import tick from './tick.png';
const Quality = () => {
    return (
        <div className='donut2'>
            <table>
                <tr>
                    <td>
                        <div className='text'>
                            <h1>Quality commitment to doughnut ingredients.</h1>
                            <table>
                                <tr>
                                    <td><b><img src={tick}></img></b></td>
                                    <td><c>Our Commitment to Quality</c></td>
                                </tr>
                                <br></br>
                                <tr>
                                    <td><b><img src={tick}></img></b></td>
                                    <td><c>The Finest and Freshest Ingredients</c></td>
                                </tr>
                                <br></br>
                                <tr>
                                    <td><b><img src={tick}></img></b></td>
                                    <td><c>Made with only the freshest and highest quality</c></td>
                                </tr>
                            </table>
                        </div>
                    </td>
                    <td><a><img src={donut}></img></a></td>
                    
                </tr>
            </table>
            
        </div>
  )
}

export default Quality