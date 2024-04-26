import React from 'react'
import './css/navbar.css'
import logo from './search.svg';
import bag from './bag.png';
import heart from './heart.png';
import profile from './profile.png';
import line from './line.png';

const NavigationBar = () => {
  return (
    <div>
      <div className='icon'>
        <table>
          <td><a href="#"><img src={heart}></img></a></td>
          <td> <a href="#"><img src={bag}></img></a></td>
          <td><c><img src={line}></img></c></td>
          <td><b href="#"><img src={profile}></img></b></td>
        </table>           
      </div>
      <div className='search'>
          <input type="text"  placeholder="Search your Doughnut"></input>   
          <img src={logo}></img>
      </div>
      <div className='topnav'>             
        <table>
          <tr>
            <td><a href='#'>Our Story</a></td>
            <td><a href='#'>Our Products</a></td>
            <td><a href='#'>Contact</a></td>  
          </tr>
        </table>       
      </div>
    </div>
  )
}

export default NavigationBar
