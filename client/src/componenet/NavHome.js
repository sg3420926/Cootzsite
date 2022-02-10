import React,{useState,useEffect} from 'react';
import logo from '../Assets/logo.png'
import {FaBars,FaCaretDown} from "react-icons/fa"
import {Link} from "react-router-dom"
import axios from "axios"

function NavHome(props) {
  const [dis, setDis] = useState("none");
  const [dis2, setDis2] = useState("none");
  const [dis3, setDis3] = useState("none");
  const [exampostb, setExampostb] = useState([]);
	useEffect(async () => {
		await axios.request('/exampostbar')
			.then(function (response) {
				setExampostb(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
  
  const popup=()=>{
    setDis("block")
  }
  const popdown=()=>{
    setDis("none")
  }
  const popup2=()=>{
    setDis2("block")
  }
  const popdown2=()=>{
    setDis2("none")
  }
  const popup3=()=>{
    if(dis3==="none"){
    setDis3("block")
    }
    else{
      setDis3("none")
    }
  }

  return <div className="nav">
     <div id="myModal" className="modal" style={{display:dis}}>
            <div className="modal-content" onMouseOver={popup} onMouseLeave={popdown}>
                <h3>Exams</h3>
                {exampostb.map(post=><div key={post._id}><img src={require('../../../server/images/'+post.Examlogo)} alt="ok"/><span>{post.Name}</span></div>)}
                
                <div><Link to="/Examlist" ><span>View More</span></Link></div>
            </div>
        </div>
        <div id="myModal2" className="modal" style={{display:dis2}}>
            <div className="modal-content2" onMouseOver={popup2} onMouseLeave={popdown2}>
                <h3>Contests</h3>
                <div>Trending</div>
                <div>Upcoming</div>
                <div>Past Contests</div>
            </div>
        </div>
        <div id="myModal3" className="modal" style={{display:dis3}}>
            <div className="modal-content3">
             <Link to="/Examlist">Exams</Link>
             <a href="Contest.html">Contests</a>
             <Link to="/Blogs">Blogs</Link>
            </div>
        </div>
        <img src={logo} alt="pk"/>
                
                <Link to="/" className="navlink"><span className='s5'>COOTZ</span></Link>
                <Link to='/Registration' className="s6"> Sign Up</Link>
                <FaBars className="fas fa-bars" onClick={popup3}/>
                <Link to="/Blogs"><span className="s2">Blogs</span></Link>
                <Link to='/'><span className="s3" onMouseOver={popup2} onMouseOut={popdown2}>Contests<FaCaretDown
                        className="fas fa-caret-down"/></span></Link>
                <span className="s4" onMouseOver={popup} onMouseOut={popdown}>Exams<FaCaretDown
                        className="fas fa-caret-down"/></span>
                <Link to="/"><span className="s1" >Home</span></Link>
  </div>;
}

export default NavHome;
