import React from 'react'
import './css/contact.css'
import email from './email.svg';
import call from './call.svg';
import loc from './location.svg';
import insta from './instagram.svg';
import twit from './twitter.png';
import fb from './fb.png';
import donut from './donut.png';
const Contact = () => {
    return (
        <div className='footer'>
            <table>
                <tr>
                    <td>
                        <c><img src={donut}></img></c>
                    </td>
                    <td>
                    <table>
                        <tr>
                            
                            <td><b><a>Contact Us</a></b></td>
                            <td><b><a>Visit our Office</a></b></td>
                            <td><b><a>Follow Us</a></b></td>
                            
                        </tr>
                        <tr>
                            <td>
                            <div className='logo'>
                                <table>
                                    <tr>                                    
                                        <td><img src={email}></img></td>
                                        <td><a href='https://www.youtube.com/'>info@doughnuts.com</a></td>                                        
                                    </tr>
                                </table>
                            </div>
                            </td>
                            <td>
                            <div className='logo'>
                                <table>
                                    <tr>                                    
                                        <td><img src={loc}></img></td>
                                        <td><a>846E, St Rita's avenue, Thumpeliya, Ja-Ela</a></td>                                        
                                    </tr>
                                </table>
                            </div>
                            </td>
                            <td>
                                <table >
                                    <tr>
                                        <div className='insta'>
                                            <td><img src={insta}></img></td>
                                            <td><img src={twit}></img></td>
                                            <td><img src={fb}></img></td>
                                            
                                        </div>
                                        
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className='logo'>
                                <table>                                
                                    <tr>
                                        <td><img src={call}></img></td>
                                        <td><a>+94 77 885 567</a></td>                                       
                                    </tr>
                                </table>
                            </div>    
                            </td>
                        </tr>
                    </table>            

                    </td>
                </tr>
            </table>
            <br></br>
            <br></br>
            <br></br>
            <div className='botnav'>             
            <table>
              <tr>
                <td><a href='#'>Our Story</a></td>
                <td><a href='#'>Our Products</a></td>
                <td><a href='#'>Contact</a></td>  
              </tr>
            </table>       
            </div>       
            <hr></hr>
        </div>
  )
}

export default Contact