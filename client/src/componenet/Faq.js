import React,{useState,useEffect} from 'react';
import NavHome from './NavHome';
import Ve from "../Assets/Vector 67.png"
import axios from "axios"
function Faq() {
    const [faqpost,setFaqpost] = useState([])
    useEffect(async()=>{
        await axios.request('/faqpost')
        .then(function (response) {
            setFaqpost(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    },[])
    const display=(id,str)=> {
        var ele =  document.getElementById(id)
        var im= document.getElementById(str)
        if (ele.style.display === "block") {
            ele.style.display="none"
            im.style.transform = "unset"
        }
        else {
            ele.style.display='block'
            im.style.transform = "rotate(180deg)"
        }
    }

  return (
<div className="container">
    <NavHome/>
        <div className="faqbox2">
            <h1>Frequently Asked Questions</h1>
            {faqpost.map(post=><div className="faqqustion" key={post._id}>
                <div className="faqq1"><span>{post.Qustion}</span><img id={post.Qustion.slice(5,10)} src={Ve}
                        onClick={()=>display(post._id,post.Qustion.slice(5,10))} /></div>
                <div className="faqa1" id={post._id}>
                    {post.Answer}
                </div>
            </div>)}
            
        </div>
    
</div>
  );
}

export default Faq;
