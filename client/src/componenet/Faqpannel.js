import React,{useState} from 'react';
import logo from '../Assets/logo.png'
function Faqpannel() {
  const [faq,setFaq]=useState({Qustion:'',Answer:''})
  const changeHandle=(e)=>{
    setFaq({...faq,[e.target.name]:e.target.value})
  }
  const save= async()=>{
    const res = await fetch('/FaqPost',{ 
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(faq)})
    const data = await res.json()
  
    if(data===true){
      alert("Faq added")
      setFaq({Qustion:'',Answer:''})
    }
    else{
      alert("Something went Wrong")
    }
  }
  return <div className="container">
      <div className="panelbox1"><h1>Faqs</h1><img src={logo}/><h1>Panel</h1></div>
      <div className="addfaq">
        <h1>Faq's Add here</h1>
         <span>Enter Qustion</span>
         <textarea type="text" placeholder='Qustion' name="Qustion" value={faq.Qustion} onChange={changeHandle}/>
         <span>Enter Answer</span>
         <textarea type="text" placeholder="Answer"  name="Answer" value={faq.Answer} onChange={changeHandle}/>
         <button onClick={save}>Save</button>
      </div>
        </div>
}

export default Faqpannel;
