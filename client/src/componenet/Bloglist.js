import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaAlignRight, FaThumbsDown,FaArrowAltCircleLeft } from 'react-icons/fa';
import logo from '../Assets/logo.png';
import i4 from '../Assets/image4.png';
import { Link } from 'react-router-dom';
import blogi from '../Assets/blogi.png'
import axios from 'axios';
import vi from '../Assets/Vector (2).png';
function Bloglist() {
	const [serch,setSerch]= useState('')
	const [topi,setTopi]=useState('')
	const [list, setList] = useState(true);
	const[a,seta] =useState(0)
  const [blog,setBlog] = useState({})
	const [thums, setThumbs] = useState([]);
	useEffect(async () => {
		await axios
			.request('/thumbnailpost')
			.then(function (response) {
				setThumbs(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, [a]);
  const show =async (top,topi)=>{
    
    const res = await fetch('/Ablog',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({Topic:top})
    })
    const d = await res.json()
    setBlog(d)
	setTopi(topi)
    setList(false)
  }
  const showlist=()=>{
	  setList(true)
  }
  const searchChange=async(e)=>{
            setSerch(e.target.value)
				const res = await fetch('/serchblog', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({Topic:serch})
				})
				const d= await res.json()
				setThumbs(d)
		if(serch.length===1){
			seta(a+1)
		}
  }
	return (
		<div className="container">
			<div className="blogbox1">
				<img src={logo} />
				<Link to='/' className="bloglink"><span>COOTZ</span></Link>
				<div className="blogbox1a">
					<span>
						Contests
						<FaCaretDown className="fas fa-caret-down" />
					</span>
					<span>About</span>
					<Link to="/Faqs">
						<span>FAQ's</span>
					</Link>
					<button>Download</button>
				</div>
			</div>
    { list
			?<><img src={i4} className="im" />
			<div className="inp">
				<span>
					Exams
					<FaCaretDown className="fas fa-caret-down" />
				</span>
				<input type="text" className="i1" placeholder="Search For Blogs" value={serch} onChange={searchChange}/>
			</div>
			<div id="blogbox2">
				{
				thums.map((post) => (
					<div className="blogbox2a" key={post._id} onClick={()=>show(post.Topic,post.ThumbIm)}>
						<img
							className="asd"
							src={require('../../../server/images/' + post.ThumbIm)}
						/>
						<h3>{post.Topic}</h3>
						<p>{post.Descri}</p>
						<span>{post.Date}</span>
						<img src={vi} className="as" />
					</div>
				))}
			</div></>
      :<div className="blogcontainer">
            <div className="topim" ></div>
			<FaArrowAltCircleLeft className='arrow' onClick={showlist}/>
			<div className="blo">
			<h1>{blog.Tagline}</h1>
			<p>{blog.Para1}</p>
			<img src={require('../../../server/images/'+blog.BlogIm)}/>
			<span className="iminfo">{blog.ImageInfo}</span>
			<p>{blog.Para2}</p>
			</div>
        </div>}
		</div>
	);
}

export default Bloglist;
