import React from 'react';
import {FaArrowRight} from "react-icons/fa"
import box3 from "../Assets/box3.png"
function H3(){
  return (
<div class="box3">
            <div class="f1">
                <h2>Join any contest<br/>
                    and win cash money</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque, in nec viverra at cras id mattis non sit.
                    Cursus tristique adipiscing nunc massa eget suspendisse arcu est, enim.
                    Turpis vel eu mauris, mollis adipiscing.
                    Interdum placerat porttitor eu libero amet, rhoncus.
                    Aliquam quisque vivamus et ut vitae ac gravida. Mauris, egestas
                </p>
                <button>Join Now<FaArrowRight class="fas fa-arrow-right"/></button>
            </div>
            <img src={box3} />
        </div>
  )
}

export default H3;
