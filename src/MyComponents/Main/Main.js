import React from 'react'
import banner from "./banner.png";
import EY1 from "./EY1.png";
import EW1 from "./EW1.png";
import { Link } from 'react-router-dom';


export default function Main() {
  return (
    <div>
    <div class="main">
        <div class="intro">
            <div class="action">
                <h4>Internships</h4>
            <h2>Work From Home</h2>
            <h1>Best IT Companies</h1>
            <p>Hurry up before registration closes</p>
            </div>
        </div>
            <div>
                <img id="img1" src={banner} alt="pic"  width="800" height="600" />
            </div>
    </div>
    <div>
        <h2><center>Companies</center></h2>
        <div class="info">
            
            <div id="cp1">
                <Link to="englishyaari" >
                
                    <img src={EY1} width="480" height="400"/>
                <h4>EnglishYaari</h4>
                <p>EnglishYaari is India's Most Affordable English Learning Platform. EnglishYaari offers English conversation practice sessions over 1-on-1 Video Calls with excellent English Speakers across the globe 24/7.</p>
                
                </Link>
            </div>
            <div id="cp2">
                <a href="#">
                    <img src={EW1} width="480" height="400"/>
                <h4>EasyWebes</h4>
                <p>EasyWebes is a Software, Android App, and Website development company in Bihar that delivers cutting-edge products for customers globally.It is one of the best software company in the world.</p>

                </a>
            </div>
        </div>
        </div>
    </div>
    
  )
}
