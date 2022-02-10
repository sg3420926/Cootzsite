import React from 'react';
import NavHome from './NavHome';
import Mob from '../Assets/mobile.png'
import {FaYoutube,FaInstagram,FaTwitter,FaLinkedin,FaApple} from "react-icons/fa"
function H1() {
  return <div className="box1">
        <NavHome num={1}/>
        <div className="social">
                <span>Also visit</span>
                <div><a href="https://www.youtube.com/channel/UCL6lJKyY_v527cNUZuYIENA">
                        <FaYoutube className="fab fa-youtube"/></a>
                    <a href="https://www.instagram.com/cootzindia/"><FaInstagram className="fab fa-instagram"/></a>
                    <a href="https://www.linkedin.com/company/cootz/mycompany/"><FaLinkedin className="fab fa-linkedin"/></a>
                    <a href="https://twitter.com/Cootzedu"><FaTwitter className="fab fa-twitter"/></a>
                </div>
            </div>
            <div className='box1a'>
                <h2>
                    INDIA'S FIRST
                </h2>
                <h1>EDUTAINMENT PLATFORM</h1>
                <button><i className="fas fa-download"></i> Download</button>
                <span>Available on<FaApple className="fab fa-apple"/><i className="color">android</i></span>
            </div>
            <img src={Mob} className="box1b" alt="ok"/>
            <div className="cir"></div>
            <div className="squ"></div>
            <div className="bottom">cootz</div>
  </div>;
}

export default H1;
