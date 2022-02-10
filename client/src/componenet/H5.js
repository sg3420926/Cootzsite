import React from 'react';
import {FaYoutube,FaInstagram,FaTwitter,FaLinkedin, FaTelegram} from "react-icons/fa"
import im2 from "../Assets/image2.png"
import {Link} from "react-router-dom"
function H5() {
  return (
    <div class='box5'>
    <div class="box5a">
        <h2>Visit Our Social Channels
            For More Interactions</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Neque, in nec viverra at cras id mattis non sit. Cursus tristique adipiscing nunc massa eget
            suspendisse arcu est, enim.
            Turpis vel eu mauris, mollis adipiscing.
            Interdum placerat porttitor eu libero amet, rhoncus.
            Aliquam quisque vivamus et ut vitae ac gravida. Mauris, egestas
        </p>
        <a href="https://www.youtube.com/channel/UCL6lJKyY_v527cNUZuYIENA">
            <div class="you"><FaYoutube class="fab fa-youtube"/><span>Youtube</span></div>
        </a>
        <a href="https://www.linkedin.com/company/cootz/mycompany/">
            <div class="lin"><FaLinkedin class="fab fa-linkedin"/><span>Linkedin</span></div>
        </a>
        <a href="https://www.instagram.com/cootzindia/">
            <div class="ins"><FaInstagram class="fab fa-instagram"/><span>Instagram</span></div>
        </a>
        <a href="https://twitter.com/Cootzedu">
            <div class="twi"><FaTwitter class="fab fa-twitter"/><span>Twitter</span></div>
        </a>
        <a href="https://web.telegram.org/z/#-1780719277">
            <div class="tel"><FaTelegram class="fab fa-telegram"/><span>Telegram</span></div>
        </a>
    </div>
    <div class="box5b">
        <FaYoutube class="fab fa-youtube"/>
        <FaLinkedin class="fab fa-linkedin"/>
        <img src={im2} />
        <FaInstagram class="fab fa-instagram"/>
        <FaTwitter class="fab fa-twitter"/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class='table'>
        <table>
            <tr>
                <th>Exams</th>
                <th>Contests</th>
                <th>Contests</th>
                <th>Contests</th>
                <th>Contests</th>
            </tr>
            <tr>
                <td>Trending</td>
                <td>Trending</td>
                <td>Trending</td>
                <td>Trending</td>
                <td>Trending</td>
            </tr>
            <tr>
                <td>Upcomig</td>
                <td>Upcomig</td>
                <td>Upcomig</td>
                <td>Upcomig</td>
                <td>Upcomig</td>
            </tr>
            <tr>
                <td>Conducted</td>
                <td>Conducted</td>
                <td>Conducted</td>
                <td>Conducted</td>
                <td>Conducted</td>
            </tr>
            <tr>
                <td>Sciece</td>
                <td>Sciece</td>
                <td>Sciece</td>
                <td>Sciece</td>
                <td>Sciece</td>
            </tr>
            <tr>
                <td>Maths</td>
                <td>Maths</td>
                <td>Maths</td>
                <td>Maths</td>
                <td>Maths</td>
            </tr>
        </table>
    </div>
    <Link to="/Pannel"><h4 class="copy">Copyright © - Cootz India | All rights reserved</h4></Link>
    <h4 class="privacy">Privacy Policy | MPL Fairplay | Terms & Condition</h4>
</div>
  );
}

export default H5;
