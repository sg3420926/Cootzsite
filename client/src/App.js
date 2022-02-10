
import './App.css';
import Home from "./componenet/Home"
import Bloglist from './componenet/Bloglist';
import Register from './componenet/Register'
import Examlist from './componenet/Examlist'
import Faq from './componenet/Faq'
import News from './componenet/News'
import Pannel from "./componenet/Pannel"
import Blog from "./componenet/Blog"
import Exam from "./componenet/Exam"
import Faqpannel from './componenet/Faqpannel';
import Event from './componenet/Event';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/Blogs" element={<Bloglist/>}/>
          <Route  path="/registration" element={<Register/>}/>
          <Route path="/Examlist"   element={<Examlist/>}/>
          <Route path="/Faqs"   element={<Faq/>}/>
          <Route path="/Pannel"   element={<Pannel val={false}/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/Pannel/blogs" element={<Blog/>}/>
          <Route path="/Pannel/exams" element={<Exam/>}/>
          <Route path="/Pannel/Faqs" element={<Faqpannel/>}/>
          <Route path ="/Pannel/events" element={<Event/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
