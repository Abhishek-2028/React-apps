const express = require("express");
const mongoose =require("mongoose");
const app=express();
const cors=require("cors");
// const res = require("express/lib/response");
// const res = require("express/lib/response");
const port=7000;


mongoose.connect("mongodb://0.0.0.0:27017/testdb")
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));


var userSchema=new mongoose.Schema({
    Name: String,
    Email: String,
    Phone:String,
    Password: String
});
var User = mongoose.model("user",userSchema);


var appoinSchema=new mongoose.Schema({
    
    Name: String,
    Email: String,
    Phone:String,
    Gender:String,
    Date:String,
    Time:String
});
var Userappoin = mongoose.model("appoin",appoinSchema);

var conSchema=new mongoose.Schema({
    Name: String,
    Email: String,
    Message:String
});
var contact = mongoose.model("contact",conSchema);


app.use(express.json());
app.use(cors())

//appointment
app.post("/add-appoin",async (req,res)=>{
    let  data2= new Userappoin(req.body);
    let demo2= await data2.save();
    res.send(demo2); 
})
app.get("/show-appoin",async(req,res)=>{
    let userData=await Userappoin.find();
    res.send(userData);
})
app.delete("/appoin/:id",async(req,res)=>{
    const data=await Userappoin.findByIdAndDelete(req.params.id);
    res.json(data)
  })


//register
app.post("/add",async (req,res)=>{
    let  data= new User(req.body);
    let demo1= await data.save();
    res.send(demo1); 
})

app.get("/showall",async(req,res)=>{
    let userData=await User.find();
    res.send(userData);
})

app.delete("/:id",async(req,res)=>{
  const data=await User.findByIdAndDelete(req.params.id);
  res.json(data)
})

//contact

app.post("/add-contact",async (req,res)=>{
    let  data3= new contact(req.body);
    let demo2= await data3.save();
    res.send(demo2); 
})

app.get("/show-contact",async(req,res)=>{
    let contactData=await contact.find();
    res.send(contactData);
})

app.delete("/contact/:id",async(req,res)=>{
  const data=await contact.findByIdAndDelete(req.params.id);
  res.json(data)
})

// app.get("/showemail",(req,res)=>{
    // let userData=await User.find({},['Email']);
    // res.send(userData);
//     let email= User.find().select('Email').then((data)=>{res.send(data)});
//     console.log(email)
      
// })

// app.get("/showpass",async(req,res)=>{
//     await User.find().select('Password').then((data)=>{res.send(data)}); 
    
// })


app.listen(port,()=> console.log(`server is running on port ${port}`));
