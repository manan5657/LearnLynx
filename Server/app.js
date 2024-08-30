if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const courseRouter = require("./Routes/course_router");
<<<<<<< HEAD
const userRouter=require('./Routes/userRouter');

const cookieParser = require('cookie-parser');
=======
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6

const MongoUrl = process.env.MONGOURL;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
<<<<<<< HEAD
app.use(cookieParser());
=======
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
//Connecting Database
mongoose
  .connect(MongoUrl)
  .then(() => console.log("Connected to online Database"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

//Routes
<<<<<<< HEAD
app.use("/api/admin", courseRouter);
app.use("/api",userRouter);








=======
app.use("/admin", courseRouter);
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6


//Listening to port
app.listen(3000, () => {
  console.log("App is listening to port 3000");
});
