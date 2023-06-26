const { Router } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const route = express.Router();
const stu = require('../schema.js')

route.use(express.json());



route.get('/',(req,res)=>{
    res.write("Endpoints:\n");
    res.write("/student for posting student data to be saved into database(using postman)..\n");
    res.write("/student to fetch all the saved data and display as array of json object\n")
    res.end("Thanks")
})


route.post('/student/:roll',(req,res)=>{

    let rollno=req.params.roll;
    let {name,age,roll,grade}=req.body;
    
    stu.findOneAndUpdate({roll:rollno},{name,age,roll,grade},{new:true}).then((data)=>{
        if(data)
         return res.json({message:"Student details has been updated!",newData:data});
    
         else{
            return res.status(404).json({ error: "Student not found" });
         }
    }).catch(()=> res.status(500).json({ error: "Error in updating details" }))
    })


route.get('/student/:roll',(req,res)=>{

    let rollno=req.params.roll;
    
    
    stu.findOne({roll:rollno}).then((data)=>{
        if(data)
         return res.json({message:"Fetched student with given roll no.!",newData:data});
    
         else{
            return res.status(404).json({ error: "Student not found" });
         }
    }).catch(()=> res.status(500).json({ error: "Error in finding student details" }))
    })


route.post('/student', (req, res) => {

    let { name, age,roll, grade } = req.body;


  
    stu.findOne({roll:roll}).then((val)=>{

        if(!val){
    
          let user = new stu({ name: name, age: age, roll:roll, grade: grade });
        
          user.save().then(() => {
              console.log("Data is saved in database!");
              res.json({ message: "Data is saved in the database!",data:user })
          }).catch(() => console.log("Problem in saving the info."))
        }
        else 
        res.json({message:"Student with exact same roll number already exist"})
    });
   


})


route.get('/student', (req, res) => {
    // let { name, age,roll, grade } = req.body;
 stu.find().then((data)=>{console.log("Data recieved :",data);
res.json(data);
}).catch(()=>console.log("Failed to fetch!"));


});




module.exports = route;
