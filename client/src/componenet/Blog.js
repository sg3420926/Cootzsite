import React,{useState,useEffect} from 'react';
import logo from "../Assets/logo.png"
import axios from 'axios'
function Blog() {
  const [blogdata, setblogdata] = useState({
		Tagline: '',
		Para1: '',
		Para2: '',
		BlogIm: '',
    ImageInfo:''
	});
  const [thumbdata, setthumbdata] = useState({
		Topic: '',
		Descri: '',
		ThumbIm: '',
	});
  const [thums,setThumbs] =useState([])
  useEffect(async () => {
  await axios
    .request('/thumbnailpost')
    .then(function (response) {
      setThumbs(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}, []);
  const handleChange=(e)=>{
    setblogdata({...blogdata,[e.target.name]:e.target.value})
}
const handlePhoto=(e)=>{
    setblogdata({...blogdata,[e.target.name]:e.target.files[0]})
}
const handleSubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData();


    formData.append('Topic',thumbdata.Topic);
        formData.append('Tagline',blogdata.Tagline);
        formData.append('Para1', blogdata.Para1);
        formData.append('Para2', blogdata.Para2);
        formData.append('BlogIm',blogdata.BlogIm);
        formData.append('ImageInfo',blogdata.ImageInfo);
    axios.post('/BlogPost', formData)
        .then(res => {
            alert(res.data);
        })
        .catch(err => {
            alert("Something went wrong") 
        });
        const formData2 = new FormData();
        formData2.append('Topic', thumbdata.Topic);
        formData2.append('Descri', thumbdata.Descri);
        formData2.append('ThumbIm',thumbdata.ThumbIm);
    
        
    
        axios.post('/ThumbnailPost', formData2)
            .then(res => {
                alert(res.data);
            })
            .catch(err => {
                alert("Something went wrong") 
            });
        setthumbdata({
          Tagline: '',
          Para1: '',
          Para2: '',
          BlogIm: '',
          ImageInfo:''
        })
        setblogdata({
          Tagline: '',
          Para1: '',
          Para2: '',
          BlogIm: '',
        })
      }
      const delblog=(topic)=>{
          const res =fetch("/Delblog",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({Topic:topic})
          })
          const d = res.json();
      }
      const handleChange2=(e)=>{
        setthumbdata({...thumbdata,[e.target.name]:e.target.value})
    }
    const handlePhoto2=(e)=>{
        setthumbdata({...thumbdata,[e.target.name]:e.target.files[0]})
    }
    
  return <div className="container">
      <div className="panelbox1"><h1>Blogs</h1><img src={logo}/><h1>Panel</h1></div>
      <div className="bloglist">
        <h1>Blogs We Have</h1>
        <div className="blogdis">
        {thums.map(post=><div className="blogbox2a" key={post._id}>
            <img  className="asd" src={require('../../../server/images/'+post.ThumbIm)}/>
            <h3>{post.Topic}</h3>
            <p>{post.Descri}</p>
            <span>{post.Date}</span><button onClick={()=>delblog(post.Topic)}>Del</button>
        </div>)}
        </div>
      </div>
      <div className="addblog">
        <h1>Write your blog here</h1>
        <form  encType="multipart/form-data">
          <fieldset>
            <legend>
              Set Thumbnail
            </legend>
            <span>Enter Topic for your blogs or article</span>
            <input className="blogtopic" type="text" placeholder="Topic" name="Topic" value={thumbdata.Topic} onChange={handleChange2}/>
            <span>Enter sort description</span>
            <input type="text" className="blogtopic" placeholder="Sort description of Your Blog" name="Descri" value={thumbdata.Descri} onChange={handleChange2}/>
            <span>Choose your Thumbnail</span>
            <input className="blogfile" type="file" name="ThumbIm" onChange={handlePhoto2}/>
          </fieldset>
        </form>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <fieldset>
            <legend>
              Blog Data
            </legend>
            <span>Enter Tagline for your blogs or article</span>
            <input className="blogtopic" type="text" placeholder="Tagline" name="Tagline" value={blogdata.Tagline} onChange={handleChange}/>
            <span>Enter Your first Paragaph</span>
            <textarea className="blogpara" placeholder="Detail of Your Blog" name="Para1" value={blogdata.Para1} onChange={handleChange}/>
            <span>Enter Your second Paragaph</span>
            <textarea className="blogpara" placeholder="Detail of Your Blog" name="Para2" value={blogdata.Para2} onChange={handleChange}/>
            <span>choose your Content Image</span>
            <input className="blogfile" type="file" name='BlogIm' onChange={handlePhoto}/>
            <input className="blogtopic" type="text" name='ImageInfo' onChange={handleChange} placeholder="ImageInfo"/>
            <input className="blogbutton" type="submit"/>
          </fieldset>
        </form>
        
      </div>
  </div>;
}

export default Blog;
