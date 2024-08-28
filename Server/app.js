if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const courseRouter = require("./Routes/course_router");
const bcrypt=require('bcrypt');
const User=require('./Models/user');
const jwt = require('jsonwebtoken');
const { binary } = require("joi");
const cookieParser = require('cookie-parser');

const MongoUrl = process.env.MONGOURL;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
//Connecting Database
mongoose
  .connect(MongoUrl)
  .then(() => console.log("Connected to online Database"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

//Routes
app.use("/admin", courseRouter);


app.post("/signup",async(req,res)=>{
  try{
    const{username,email,password}=req.body;
    if(!(username && email && password)){
      return res.status(400).send('All Details are Required');
    }
    const existingUser= await User.findOne({email});
    if(existingUser){
      return res.status(401).send('User Already Exisit');
    }
    const EncPass=await bcrypt.hash(password,10);
    const user=await User.create({
      username,
      email,
      password:EncPass
    })
    const token=jwt.sign({
      id:user._id,
      email,
    },'MySecretKey',{expiresIn:'2h'});
    user.token=token,
    user.password=undefined;
    res.status(201).json(user);

  }
  catch(error){
    console.log(error);
    res.status(500).send('Something Went Wrong');

  }
})

app.post("/login",async(req,res)=>{
  try{
    const{email,password}=req.body;
    if(!(email && password)){
      return res.status(400).send('Please Fill Details');
    }
    const user= await User.findOne({email});
    if(user && await bcrypt.compare(password,user.password)){
      const token=jwt.sign({id:user._id},'MySecretKey',{expiresIn:'2h'})
      user.token=token;
      user.password=undefined;
      const options={
        expire: new Date(Date.now()+3*24*60*60*1000),
        httpOnly:true
      }

      return res.status(200).cookie("token",token,options).json({
        success:true,
        token,
        user
      })
    }
    res.status(400).send('Enter Correct Credentials');

  }
  catch(error){
    console.log(error);
    res.status(500).send("Something Went Wrong");
  }
})


//Listening to port
app.listen(3000, () => {
  console.log("App is listening to port 3000");
});
