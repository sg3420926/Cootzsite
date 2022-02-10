import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.png';
import axios from 'axios';
function Exam() {
	const [examdata, setExamdata] = useState({
		Name: '',
		Detail1: '',
		Detail2: '',
		ExamCode: '',
		Examlogo: '',
	});
	const [exampost, setExampost] = useState([]);
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
	const delExam = async (code) => {
		const res = await fetch('/delExam', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ExamCode: code }),
		});
		const d = await res.json();
		alert(d);
	};
	const handleChange = (e) => {
		setExamdata({ ...examdata, [e.target.name]: e.target.value });
	};
	const handlePhoto = (e) => {
		setExamdata({ ...examdata, [e.target.name]: e.target.files[0] });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();

		formData.append('Name', examdata.Name);
		formData.append('Detail1', examdata.Detail1);
		formData.append('Detail2', examdata.Detail2);
		formData.append('ExamCode', examdata.ExamCode);
		formData.append('Examlogo', examdata.Examlogo);

		axios
			.post('/ExamPost', formData)
			.then((res) => {
				alert(res.data);
			})
			.catch((err) => {
				alert('Something went wrong');
			});
		setExamdata({
			Name: '',
			Detail1: '',
			Detail2: '',
			ExamCode: '',
			Examlogo: '',
		});
	};
	return (
		<div className="container">
			<div className="panelbox1">
				<h1>Exams</h1>
				<img src={logo} />
				<h1>Panel</h1>
			</div>
			<div className="bloglist">
				<h1>Exams We Have</h1>
				<div className="Examshow">
					{exampost.map((post) => (
						<div className="p1" key={post._id}>
              <button onClick={()=>delExam(post.ExamCode)}>Del</button>
							<img src={require('../../../server/images/' + post.Examlogo)} />
							<h4>{post.Name}({post.ExamCode})</h4>
						</div>
					))}
				</div>
			</div>
			<div className="addblog">
				<form onSubmit={handleSubmit} encType="multipart/form-data">
					<fieldset>
						<legend>Exam Data</legend>
						<span>Enter Name of Exams</span>
						<input
							className="blogtopic"
							type="text"
							placeholder="Exam Name"
							name="Name"
							value={examdata.Name}
							onChange={handleChange}
						/>
						<span>Enter Your first Paragaph</span>
						<textarea
							className="blogpara"
							placeholder="Detail of Exam"
							name="Detail1"
							value={examdata.Detail1}
							onChange={handleChange}
						/>
						<span>Enter Your second Paragaph</span>
						<textarea
							className="blogpara"
							placeholder=""
							name="Detail2"
							value={examdata.Detail2}
							onChange={handleChange}
						/>
						<span>Choose exam logo</span>
						<input
							className="blogfile"
							type="file"
							name="Examlogo"
							onChange={handlePhoto}
						/>
						<span>Write Exam Code</span>
						<input
							className="blogtopic"
							type="text"
							placeholder="Exam Code"
							name="ExamCode"
							value={examdata.ExamCode}
							onChange={handleChange}
						/>
						<input className="blogbutton" type="submit" />
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default Exam;
