const express=require("express")
const fs=require('fs')
const path= require("path")
var app=express()
let port=8000

app.use((request,respone,next)=>{
    console.log('Time: %d', Date.now());
    next()
})

app.get('/',(req,resp)=>{
   let content= fs.readFileSync(path.join(__dirname,"/dist/index.html"),"utf-8")
   resp.send(content)
})
app.get("/static/:files",(request,respone)=>{
    let fileName= request.params.files
    let content= fs.readFileSync(path.join(__dirname,`/dist/static/${fileName}`),"utf-8")
    respone.send(content)
})

app.listen(port,function(){
    console.log("server has starded!")
})