if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const courseRouter = require("./Routes/course_router");
const userRouter=require('./Routes/userRouter');

const cookieParser = require('cookie-parser');

const MongoUrl = process.env.MONGOURL;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.use(cookieParser());
//Connecting Database
mongoose
  .connect(MongoUrl)
  .then(() => console.log("Connected to online Database"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

//Routes
app.use("/admin", courseRouter);
app.use("/api",userRouter);


app.get('/logout', (req, res) => {
  res.clearCookie("token", {
      expires: new Date(Date.now()),
      httpOnly: true
  });

  res.status(200).json({
      success: true,
      message: "Successfully logged out"
  });
});






//Listening to port
app.listen(3000, () => {
  console.log("App is listening to port 3000");
});
