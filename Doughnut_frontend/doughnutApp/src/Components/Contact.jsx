import React from 'react'
import './css/contact.css'
import email from './email.svg';
import call from './call.svg';
import loc from './location.svg';
import insta from './insta.png';
const Contact = () => {
    return (
        <div className='footer'>
            <table>
                <tr>
                    <td><b>Contact Us</b></td>
                    <td><b>Visit our Office</b></td>
                    <td><b>Follow Us</b></td>
                </tr>
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td><img src={email}></img></td>
                                <td><a href='https://www.youtube.com/'>info@doughnuts.com</a></td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td><img src={loc}></img></td>
                                <td><a>846E, St rita avenue, Thumpeliya, Ja-Ela</a></td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td><img src={insta}></img></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td><img src={call}></img></td>
                                <td><a>+94 77 885 567</a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>            
        </div>
  )
}

export default Contact