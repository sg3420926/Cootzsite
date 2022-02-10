import React,{useState,useEffect} from 'react';
import logo from '../Assets/logo.png';
import axios from 'axios';
function Event() {
    const [event,setEvent]=useState({Name:'',TrendCount:0,EventIm:'',Target:''})
    const [ed,setEd] = useState([])
    const handleChange=(e)=>{
        setEvent({...event,[e.target.name]:e.target.value})
    }
    const handlePhoto=(e)=>{
        setEvent({...event,[e.target.name]:e.target.files[0]})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('Name',event.Name);
        formData.append('TrendCount',event.TrendCount);
        formData.append('EventIm',event.EventIm);
        formData.append('Target',event.Target);
    axios.post('/EventPost', formData)
        .then(res => {
            alert(res.data);
        })
        .catch(err => {
            alert("Something went wrong") 
        });
        setEvent({Name:'',EventIm:'',Target:''})
    }  
    useEffect(async ()=>{
        await axios.request("/edpost").then(function (response) {
            setEd(response.data)
          }).catch(function (error) {
            console.error(error);
          });
	},[])  
    const delevent=async(n)=>{
        const res = await fetch('/delEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({Name:n})
        })
		const d= await res.json()
		alert(d)
	}
	return (
		<div className="container">
			<div className="panelbox1">
				<h1>Event</h1>
				<img src={logo} />
				<h1>Panel</h1>
			</div>
			<div className="Events">
				<h1>Events we have</h1>
                <div className="event">
        {ed.map(post=><div style={{textAlign:"center",display:"inline-block"}}><a href={post.Target}><img className="e1" key={post._id} src={require('../../../server/images/'+post.EventIm)}/></a>
        <button onClick={()=>delevent(post.Name)}>Remove</button></div>)}
    </div>
			</div>
			<div className="eventform">
                <h1>Add Event</h1>
				<form onSubmit={handleSubmit} encType="multipart/form-data">
                    <span>Enter name of Event</span>
                    <input className="eventname" type="text" placeholder="Name" name="Name" value={event.Name} onChange={handleChange}/>
                    <span>Enter Trend Number</span>
                    <input className="eventnum" type="number" placeholder="number" name="TrendCount" value={event.TrendCount} onChange={handleChange}/>
                    <span>Enter poster of Event</span>
                    <input className="eventfile" type="file" name="EventIm"  onChange={handlePhoto}/>
                    <span>Enter Target Link</span>
                    <input className="eventtar" type="text" placeholder="Target Link" name="Target" value={event.Target} onChange={handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
			</div>
		</div>
	);
}

export default Event;
