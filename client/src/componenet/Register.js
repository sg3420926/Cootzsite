import React from 'react';
import g13 from '../Assets/Group 13 1.png';
import app from "../Assets/app-store-png-logo-33123 1.png"
import prize from "../Assets/prize 1.png"
import sec from "../Assets/second.png"
import goo from "../Assets/google.png"
function Register() {
  return (
    <div class="main_container">
    <br/>
    <br/>
    <br/>

    <div class="inner_container">
        <div class="inner_left">
            <div class="circle"></div>
            <div class="content">
                <div class="top">
                    <div class="top_left">
                        <div><img src={g13} alt=""/></div>
                        <div><span>COOTZ</span></div>
                    </div>
                    <div class="top_right">
                        <div class="text">Available Soon</div>
                        <div class="image">
                            <img src={app} alt=""/>

                        </div>
                    </div>
                </div>
                <div class="buttom_image">
                    <div class="first_image"><img src={prize} alt=""/></div>
                    <div class="second_image"><img src={sec} alt=""/></div>
                </div>
            </div>
        </div>
        <div class="inner_right">

            <div class="d1">
                <div class="d1_l">
                    <div class="text_1">Welcome,<br/>Register yourself with us for</div>
                    <div class="text_2">FREE tickets</div>
                </div>

            </div>
            <div class="d2">
                <input type="text" class="input" id="name" name="name" placeholder="Full Name"/>
                <input type="email" class="input" id="email" name="email" placeholder="Email ID"/>
                <input type="text" class="input" id="number" name="number" placeholder="Phone Number"/>
            </div>
            <div class="d3">Already a member ? <span> LOG IN</span></div>
            <div class="d4"><button class="google_btn">
                    <img src={goo} alt="google"/>
                    <p>Register Using Google</p>

                </button></div>
            <div class="d5">
            <div class="get_otp">
                    <p>Get OTP</p>
                </div>


            </div>
            <div class="curve" style={{top:"-21%",height: "14vw"}}></div>



        </div>
    </div>
</div>
  );
}

export default Register;
