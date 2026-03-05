import express from "express"
import Post from "../models/Post.js";
const router = express.Router();

router.post('/upload', async (req, res) => {
    const {question,Author  ,seen  ,up  ,users  ,tags} = req.body
  const Upload = new Post({
    question,Author  ,seen  ,up  ,users ,tags
  })
 const findQuestion = await Post.findOne({ question });
  if(findQuestion){
     res.status(404).json({message : "Post Exist"})
     return
  }
  await Upload.save()

  

  if(Upload){
   res.status(200).json({message : "good"})
  }else{
    res.status(200).json({message : "no"})
  }
  
});

router.get("/posts", async(req,res)=>{
    try{  
        const Data = await Post.find({})
        if(Data.legnth==0){
            res.status(404).json({message : "no data"})
            return
        }
        res.status(200).json({arrayofData:Data})
    }catch(error){
        console.log(error)
    }
})

router.delete("/delete/:id", async(req,res)=>{
    try{  
            
        if(!req.params.id) return 
        const data = await Post.findByIdAndDelete(req.params.id)
         if(data){
            res.status(200).json({message : "succes"})

         }
        else{
            res.status(404).json({message:"error"})
        }
    }catch(error){
        console.log(error)
    }
})


export default router