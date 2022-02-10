import React,{useState,useEffect} from 'react';
import axios from 'axios'
function H2() {
    const [event,setEvent]= useState([])
    useEffect(async()=>{
        await axios
			.request('/edpost')
			.then(function (response) {
				setEvent(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
    },[])
    const update=async(n,count)=>{
        const res = await fetch('/upEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({Name:n,TrendCount:count})
        })
		const d= await res.json()
	}
  return (
    <div className="box2">
    <span>|</span>
    <h3>Trending Contests</h3>
    <div className="contest">
        <div className="c1">
            <div className="c2"></div>
            <div className="c3">
                <h3>UPSC</h3>
                <h5>60+ Contests</h5>
            </div>
        </div>
        <div className="c1">
            <div className="c2"></div>
            <div className="c3">
                <h3>UPSC</h3>
                <h5>60+ Contests</h5>
            </div>
        </div>
        <div className="c1">
            <div className="c2"></div>
            <div className="c3">
                <h3>UPSC</h3>
                <h5>60+ Contests</h5>
            </div>
        </div>
        <div className="c1">
            <div className="c2"></div>
            <div className="c3">
                <h3>UPSC</h3>
                <h5>60+ Contests</h5>
            </div>
        </div>
        <div className="c1">
            <div className="c2"></div>
            <div className="c3">
                <h3>UPSC</h3>
                <h5>60+ Contests</h5>
            </div>
        </div>
        <div className="c1">
            <div className="c2"></div>
            <div className="c3">
                <h3>UPSC</h3>
                <h5>60+ Contests</h5>
            </div>
        </div>
    </div>
    <span>|</span>
    <h3>Upcoming Events</h3>
    <div className="event">
        {event.map(post=><a href={post.Target}><img className="e1" key={post._id} src={require('../../../server/images/'+post.EventIm)} onClick={()=>update(post.Name,post.TrendCount)}/></a>)}
    </div>
</div>
  );
}

export default H2;
