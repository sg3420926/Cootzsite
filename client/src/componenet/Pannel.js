import React,{useState} from 'react';
import unsplash from "../Assets/unsplash.png"
import logo from "../Assets/logo.png"
import sau from "../Assets/sau.jpg"
import {Link} from "react-router-dom"
function Pannel(props) {
    const [k,setK]=useState(props.val)
    const [Pata,setPata]=useState({Name:"",Id:""})
    const changeHandle = (e)=>{
        setPata({...Pata,[e.target.name]:e.target.value})
         e.preventDefault();
        }
        
    const check=()=>{
        if(Pata.Name==="Saurabh Gupta" && Pata.Id==="sg3420926"){
            setK(true)
            
        }
        else{
            alert("Your credential is wrong")
        }

    }
    if(k){
    return(
    <div className="container">
        <div className="panelbox1"><h1>Cootz</h1><img src={logo}/><h1>Panel</h1></div>
        <div className="panelbox2">
            <Link to="/Pannel/exams"><div className="corner1"><img src={unsplash}/><h2>Exam Corner</h2></div></Link>
            <a href="Contestpannel.html"><div className="corner2"><img src={unsplash}/><h2>Contest Corner</h2></div></a>
            <Link to="/Pannel/events"><div className="corner3"><img src={unsplash}/><h2>Event Corner</h2></div></Link>
            <Link to="/news"><div className="corner4"><img src={unsplash}/><h2>News Corner</h2></div></Link>
            <Link to="/Pannel/blogs"><div className="corner5"><img src={unsplash}/><h2>Blogs Corner</h2></div></Link>
            <Link to="/Pannel/Faqs"><div className="corner5"><img src={unsplash}/><h2>Faq's</h2></div></Link>
        </div>
    </div>
    );}
else{return(<>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    <div className="admin-en">
        <h1>Cootz-admin</h1>
        <img src={sau}/>
        <hr/>
        
        <div className="z1"><span>Enter Your Name :</span><input type="text" name="Name" value={Pata.Name} onChange={changeHandle}/></div>
        <div className="z2"><span>Enter Your Cootz Id :</span><input type="text" name="Id" value={Pata.Id} onChange={changeHandle}/></div>
        <button onClick={check}>Submit</button>
    </div> </>)
}
}

export default Pannel;
