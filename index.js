const mongoose=require('mongoose')
const express=require('express');
const app=express();


app.use(express.json());

url="mongodb+srv://faiz:NFA3kXoL2Xz0qwqy@cluster0.wrfi9jl.mongodb.net/cipherschool?retryWrites=true&w=majority";

mongoose.connect(url).then(()=>{
console.log("Successfully connected!")
}).catch((err)=>console.log(err));


app.use(require('./router/routes.js'));

app.listen(3000,()=>console.log("Server started at 3000!"));

