import React from 'react'
import './css/about.css'
import donut from './Images/d.jpg';
const About = () => {
    function myFunction() {
        var dots = document.getElementById("dot");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }  
    return (
        <div className='donut'>
            <table>
                <tr>
                    <td><a><img src={donut}></img></a></td>
                    <td>
                        <div className='text'>
                            <h1>A brief story of our love affair with donuts!</h1>
                            <p>Our donuts are perfect for any ocassion, whether you're grabbing a quick breakfast on the go or ordering a dozen for a special event.<span id='dot'>......</span><span id='more'> <br></br><br></br>They're like little bursts of happiness, with flavors that can transform an ordinary day into a celebration.  We use only the finest ingredients, from real butter in our fluffy dough to fresh fruit in our fillings and glazes. That first bite? Pure bliss.</span></p>
                            <button onClick={myFunction} id='myBtn'>Read more</button>
                        </div>
                    </td>
                    
                </tr>
            </table>
            
        </div>
  )
}

export default About