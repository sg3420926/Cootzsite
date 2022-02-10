import React, { useState, useEffect } from 'react';
import NavHome from './NavHome';
import axios from 'axios'
function Examlist() {
	const [exampost, setExampost] = useState([]);
	const [list, setList] = useState(true)
	const [exam,setExam] = useState({})
	useEffect(async () => {
		await axios
			.request('/exampost')
			.then(function (response) {
				setExampost(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
	const examdet=(post)=>{
        setExam(post)
		console.log(post)
		setList(false)
	}
	return (
		<div className="container">
			<NavHome />
			{list ?
				<div className="exambox1">
					<h2>All Exams</h2>
					<div className="ex">
						{exampost.map((post) => (
							<div className="p1" key={post._id} onClick={()=>examdet(post)} >
								<img src={require('../../../server/images/' + post.Examlogo)} />
								<h4>{post.Name}</h4>
							</div>
						))}
					</div>
				</div> :
				<div className="exebox1">
					<div className="exebox1a">
						<div className="examN">
							<img src={require('../../../server/images/'+exam.Examlogo)} />
							<h2>{exam.Name}</h2>
							<div className="as">{exam.Name} <i className="fas fa-caret-down"></i></div>
							<span>*You can change your exam</span>
						</div>
					</div>

					<div className="exebox1b">
						<div className="nav2"><span className="dt" id="dt">Details</span><span className="cot" id="con2">Contests</span><span className='py'>PYP's</span></div>
						<div className="content" id="content2">
							<p>{exam.Detail1}
							</p>
							
							<div className="noti"><span className="sa">{exam.Name} Notification 2022</span><span className="sb">04th October 2021</span></div>
							<div className="result"><span className="sc">Declaration of Final Result</span><span className="sd">04th October 2021</span></div>
							<p>{exam.Detail2}</p>
							
						</div>
					</div>
				</div>
		}
				</div>
  );
}

			export default Examlist;
