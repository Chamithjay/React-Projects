import React from 'react'
import './css/navbar.css'
import logo from './Images/search.svg';
import bag from './Images/bag.png';
import heart from './Images/heart.png';
import profile from './Images/profile.png';
import line from './Images/line.png';


const NavigationBar = () => {
  return (
    <div>
      <div className='navbar'>
        <table>
          <td>
            <div className='topnav'>             
            <table>
              <tr>
                <td><a href='#'>Home</a></td>
                <td><a href='#'>Our Story</a></td>
                <td><a href='#'>Our Products</a></td>
                <td><a href='#'>Contact</a></td>  
              </tr>
            </table>       
            </div>
          </td>
          
          <td>
            <div className='search'>
              <img src={logo}></img>
              <input type="text"  placeholder="Search your Doughnut"></input>   
              
            </div>
          </td>
          <td>
            <div className='icon'>
            <table>
              <td><a href="#"><img src={heart}></img></a></td>
              <td> <a href="#"><img src={bag}></img></a></td>
              <td><c><img src={line}></img></c></td>
              <td><b href="#"><img src={profile}></img></b></td>
            </table>           
            </div>
          </td>
        </table>
      </div>
    </div>
  )
}

export default NavigationBar
