import React,{useState,useEffect} from 'react';
import {FaArrowRight,FaHeadphonesAlt} from "react-icons/fa"
import axios from "axios"
import {Link} from "react-router-dom"
import im from "../Assets/image1.png"
function H4() {
    const [sama,setSama]=useState([])
    const [ok,setOk] = useState(false)
    useEffect( ()=>{
        axios.get('/trendNews').then(res=>{setSama(res.data)
        setOk(true)}).catch(err=>console.log(err))
    },[])
    const [exampost5, setExampost5] = useState([]);
	useEffect(async () => {
		await axios.request('/exampost5')
			.then(function (response) {
				setExampost5(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
  return(
<div className="box4">
            <h2>Exams We Are Targeting On Our Platform</h2>
            <div className="ex">
            {exampost5.map((post) => (
						<div className="p1" key={post._id}>
							<img src={require('../../../server/images/' + post.Examlogo)} />
							<h4>{post.Name}</h4>
						</div>
					))}
            </div>
            <Link to="/Examlist"><button>15+ More <FaArrowRight className="fas fa-arrow-right"/></button></Link>
            <br/><br/><br/><br/>
            <h2>Collaborating And Expanding</h2>
            <div className="box4a">
                <div className="first"><img src={im} />
                    <h2>LifeChart.in</h2>
                </div>
                <div className="second">
                    <div className="we">“We are delighted to announce
                        Lifechart is extending collaboration
                        with COOTZ”</div>
                </div>
                <div className="arr"><FaArrowRight className="fas fa-arrow-right"/></div>
            </div>
            <br/><br/><br/><br/><br/>
            <h2>Top Notch Services We Provide</h2>
            <div className='box4b'>
                <div className="service"><FaHeadphonesAlt className="fas fa-headphones-alt"/>
                    <h2>24✖7</h2><span>Customer Service</span>
                </div>
                <div className="service"><FaHeadphonesAlt className="fas fa-headphones-alt"/>
                    <h2>24✖7</h2><span>Customer Service</span>
                </div>
                <div className="service"><FaHeadphonesAlt className="fas fa-headphones-alt"/>
                    <h2>24✖7</h2><span>Customer Service</span>
                </div>
                <div className="service"><FaHeadphonesAlt className="fas fa-headphones-alt"/>
                    <h2>24✖7</h2><span>Customer Service</span>
                </div>
            </div>
            <h2>Latest News & Articles</h2>
            <div className="box4c">
                <div className="news">
            
                    <h1>THE LATEST NEWS FROM COOTZ INDIA</h1>
                            {ok?(<><div className="con">
                                <h3>{sama[0].Topic}</h3>
                                <p>
                                {sama[0].Para1}
                                </p>
                                <p>
                                {sama[0].Para2}
                                </p>
                                
                            </div>
                            <div className="Newsimage"><img src={require('../../../server/images/'+sama[0].NewsIm)} /></div></>):(<h1>Loading...</h1>)}
                    
                </div>
            </div>
</div>)
}

export default H4;
