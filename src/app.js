// Server ko create krna 
// Server ko Start kar ne ke liya Root Folder me Server.js ceate ki ya hu 
const express = require('express')
const app = express()

app.get("/",(req ,res)=>{
    res.send("This is Get Method Request 😎")
})

app.post('/post',(req,res)=>{
    res.send("This is post Method Request 😎")
})

app.patch("/patch",(req,res)=>{
    res.send("This is Patch Method Request 😎")
})

app.delete("/delete",(req,res)=>{
    res.send("This is delete method request 😎")
})
module.exports =app
