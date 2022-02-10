import React, { useState,useEffect } from 'react';
import logo from '../Assets/logo.png';
import axios from "axios"
function News() {
	const [newsdata, setnewsdata] = useState({
		Topic: '',
		Para1: '',
		Para2: '',
		Priority:'',
		NewsIm: '',
	});
	const [newses,setNews]=useState([])
	useEffect(async ()=>{
        await axios.request("/newspost").then(function (response) {
            setNews(response.data)
          }).catch(function (error) {
            console.error(error);
          });
	},[])
	const delNews= async(id)=>{
        const res = await fetch('/delNews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:id})
        })
		const d= await res.json()
		alert(d)
	}
    const handleChange=(e)=>{
        setnewsdata({...newsdata,[e.target.name]:e.target.value})
    }
    const handlePhoto=(e)=>{
        setnewsdata({...newsdata,[e.target.name]:e.target.files[0]})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();


        formData.append('Topic', newsdata.Topic);
        formData.append('Para1', newsdata.Para1);
        formData.append('Para2', newsdata.Para2);
        formData.append('Priority',Number(newsdata.Priority));
        formData.append('NewsIm',newsdata.NewsIm);

        axios.post('/NewsPost', formData)
            .then(res => {
                alert(res.data);
            })
            .catch(err => {
                alert("Something went wrong") 
            });
		setnewsdata({
			Topic: '',
			Para1: '',
			Para2: '',
			Priority:'',
			NewsIm: '',
		})
            
    }
	return (
		<div className="container">
			<div className="panelbox1">
				<h1>News</h1>
				<img src={logo} />
				<h1>Panel</h1>
			</div>
			<div className="panelbox2">
				<h1>News Added</h1>
				<div className="NewsDis">
					{newses.map(ne=><div className="newsshow" key={ne._id}>
						<button onClick={()=>delNews(ne._id)}>Del</button>
						<h1>{ne.Topic}({ne.Priority})</h1>
						<p>{ne.Para1}</p>
						<p>{ne.Para2}</p>
						<img src={require('../../../server/images/'+ne.NewsIm)}/>
					</div>
					)}
				</div>
				<div className="newsform">
					<form onSubmit={handleSubmit} encType="multipart/form-data">
						<span className="newsspan">Enter Headline</span> 
						<input
							className="newstopic"
							type="text"
							size="30"
							placeholder="Max. 50 cherachter"
                            name="Topic"
							value={newsdata.Topic}
							onChange={handleChange}
						/>
						<span className="newsspan">Paragrap1</span>
						<textarea
							className="newspara"
							placeholder="write your paragraph from here"
                            value={newsdata.Para1}
                            name="Para1"
                            onChange={handleChange}
						/>
						<span className="newsspan">Paragraph2</span>
						<textarea className="newspara" 
                        value={newsdata.Para2}
                        name="Para2"
                        onChange={handleChange}
                        />
						<span className="newsspan">Enter news priority</span>
						<input className="pri" type="text" size="2" placeholder="1 to 99" vlaue={newsdata.Priority} name="Priority" onChange={handleChange}/>
						<input className="newsfile" type="file" onChange={handlePhoto} name="NewsIm"/>
						<input className="newsbutton" type="submit" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default News;
