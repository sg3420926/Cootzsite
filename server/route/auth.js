const express =require('express')
const router=express.Router();
const news =require('../modal/NewsSc')
const blog = require("../modal/BlogSc")
const multer =require('multer')
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const exam = require('../modal/ExamSc')
const faq = require('../modal/Faqsc')
const thumb =require("../modal/ThumbSc")
const event =require('../modal/EventSc')
const sign =require('../modal/SignSc')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png','video/mp4'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
let upload = multer({ storage, fileFilter });
router.route('/NewsPost').post(upload.single('NewsIm'), (req, res) => {
    console.log('hi')
        const Topic = req.body.Topic;
        const Para1 = req.body.Para1;
        const Para2 = req.body.Para2;
        const Priority = req.body.Priority;
        const NewsIm=   req.file.filename;
            const newsdata = {
            Topic,
            Para1,
            Para2,
            Priority,
            NewsIm
        }
    
        const newUser = new news(newsdata);
        console.log(req.body)
        newUser.save()
               .then(() => res.json('News Added'))
               .catch(err => res.status(400).json('Error: ' + err));
    });

router.get("/newspost",async (req,res)=>{
    const nd= await  news.find()
     res.send(nd)

})
router.post("/delNews",async (req,res)=>{
    const del=await news.deleteOne({_id:req.body.id})
    if(del.deletedCount){
        res.json("news deleted")
    }
})
router.get("/trendNews",async(req,res)=>{
        const  tnews = await news.find().sort({Priority:1}) 
        res.send(tnews)
})
router.route('/ExamPost').post(upload.single('Examlogo'), (req, res) => {
    console.log('hi1')
        const Name = req.body.Name;
        const Detail1 = req.body.Detail1;
        const Detail2 = req.body.Detail2;
        const ExamCode = req.body.ExamCode;
        const Examlogo=   req.file.filename;
            const examdata = {
            Name,
            Detail1,
            Detail2,
            ExamCode,
            Examlogo
        }
    
        const newExam = new exam(examdata);
        console.log(newExam)
        newExam.save()
               .then(() => res.json('exams Added'))
               .catch(err => res.status(400).json('Error: ' + err));
    });
    router.get("/exampost",async (req,res)=>{
        const ed= await  exam.find()
         res.send(ed)
    })
    router.post("/delExam",async (req,res)=>{
        const del=await exam.deleteOne({ExamCode:req.body.ExamCode})
        if(del.deletedCount){
            res.json("exam deleted")
        }
    })
    router.get("/exampost5",async (req,res)=>{
        const ed5= await  exam.find({ExamCode:/^F/})
         res.send(ed5)
    
    })
    router.get("/exampostbar",async (req,res)=>{
        const edb= await  exam.find({ExamCode:/B$/})
         res.send(edb)
    
    })
    router.post("/FaqPost",async(req,res)=>{
        console.log(req.body)
        const newfaq = new faq(req.body)
        const as= await newfaq.save()
        if(as){
            res.send(true)
        }
        else{
            res.send('no')
        }

    })
    router.get('/faqpost',async (req,res)=>{
        const fd = await faq.find()
        res.status(200).send(fd)
    })
    router.route('/BlogPost').post(upload.single('BlogIm'), (req, res) => {
    
            const Topic = req.body.Topic;
            const Tagline = req.body.Tagline;
            const Para1 = req.body.Para1;
            const Para2 = req.body.Para2;
            const BlogIm=   req.file.filename;
            const ImageInfo = req.body.ImageInfo;
                const blogdata = {
                Topic,
                Tagline,
                Para1,
                Para2,
                BlogIm,
                ImageInfo
            }
            
            const newBlog = new blog(blogdata);
            console.log(newBlog)
            newBlog.save()
                   .then(() => res.json('Blog Added'))
                   .catch(err => res.status(400).json('Error: ' + err));
        });
        const da = new Date();
        const month=[" January ", " February ", " March ", " April ", " May ", " June ", " July ", " August ", " September ", " October ", " November ", " December "];
        router.route('/ThumbnailPost').post(upload.single('ThumbIm'), (req, res) => {
            console.log('hi4')
                const Topic = req.body.Topic;
                const Descri = req.body.Descri;
                const ThumbIm=   req.file.filename;
                const Date = da.getDate().toString() + month[da.getMonth()] + da.getFullYear().toString()
                    const blogdata = {
                    Topic,
                    Descri,
                    ThumbIm,
                    Date
                }
            
                const newDescri = new thumb(blogdata);
                console.log(newDescri)
                newDescri.save()
                       .then(() => res.json('Thumbnail Added'))
                       .catch(err => res.status(400).json('Error: ' + err));
            });
        router.get('/thumbnailpost',async (req, res)=>{
            const td=await thumb.find()
            var rtd = td.reverse()
            res.status(200).send(rtd)
        })
        router.post('/Delblog',async(req, res)=>{
            const a = await blog.deleteOne({Topic:req.body.Topic})
            const b = await thumb.deleteOne({Topic:req.body.Topic})
            if(a.deletedCount==1 && b.deletedCount==1){
                console.log("h")
                res.json("Blog deleted")
            }
        })
        router.post('/Ablog',async(req,res)=>{
            const bd = await blog.findOne({Topic:req.body.Topic})
            res.status(200).send(bd)
        })
        router.route('/EventPost').post(upload.single('EventIm'), (req, res) => {
            
                const Name = req.body.Name;
                const TrendCount = req.body.TrendCount;
                const EventIm=   req.file.filename;
                const Target = req.body.Target;
                    const eventdata = {
                    Name,
                    TrendCount,
                    EventIm,
                    Target
                }
                const NewEvent = new event(eventdata);
                console.log(NewEvent)
                NewEvent.save()
                       .then(() => res.json('event Added'))
                       .catch(err => res.status(400).json('Error: ' + err));
            });
            router.get('/edpost',async (req, res)=>{
                const evd=await event.find().sort({TrendCount:1})
                const eventd = evd.reverse()
                res.status(200).send(eventd)
            })
            router.post("/delEvent",async (req,res)=>{
                const del=await event.deleteOne({Name:req.body.Name})
                if(del.deletedCount){
                    res.json("Event deleted")
                }
            })
            router.post("/SignPost",async(req,res)=>{
                console.log(req.body)
                const newStu = new sign(req.body)
                const as= await newStu.save()
                if(as){
                    res.send(true)
                }
                else{
                    res.send('no')
                }
        
            })
            router.post("/upEvent",async (req,res)=>{
                const a ={Name:req.body.Name} 
                const b= {TrendCount:req.body.TrendCount+1}
                const up= await event.updateOne(a,b) 
            })
            router.post('/serchblog',async (req,res)=>{
                const b= new RegExp(req.body.Topic,'i')
                const as = await thumb.find({Topic:b})
                res.send(as)
            })
module.exports = router