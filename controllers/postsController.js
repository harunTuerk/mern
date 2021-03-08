const Post = require("../models/Post")
const HttpError = require("../models/HttpError")

exports.getPosts = (req, res, next) =>{
    console.log("Controller")
    res.json({message: "hall ich bin der Controller "})
}


exports.sendPost = async (req, res, next) =>{
  
    const post = new Post({...req.body})

   let response;

   try{
      response = await post.save()
   }
   catch(err){
    // next springt zur nächsten middelware 
    return next(new HttpError(err))
   }

   res.json({message: "es wurde abgeschickt"})

   
}


