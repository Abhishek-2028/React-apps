const express = require("express");
const mongoose =require("mongoose");
const app=express();
const cors=require("cors");
const port=5555;


mongoose.connect("mongodb://0.0.0.0:27017/authdb")
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

var userSchema=new mongoose.Schema({
    Name: String,
    Email: String,
    Phone:String,
    Password: String
});
var User = mongoose.model("register",userSchema);


app.use(express.json());
app.use(cors());

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

app.get('/search/:key',async(req,res)=>{
    
    const data=await User.find( 
        {
            '$or':[
                {Email:{$regex:req.params.key}}
            ]
        }
    )
    res.json(data)
})

app.put('/update/:id',async(req,res)=>{
  const data=await User.findByIdAndUpdate(req.params.id,
    {
        $set:req.body
    });

    res.json(data)

})

app.listen(port,()=> console.log(`server is running on port ${port}`));
