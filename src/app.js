// Server ko create krna 
// Server ko Start kar ne ke liya Root Folder me Server.js ceate ki ya hu 
const express = require('express')
const app = express()

app.get("/",(req ,res)=>{
    res.send("Hello World 😎 ")
})
module.exports =app