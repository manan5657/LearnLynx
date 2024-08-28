if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const courseRouter = require("./Routes/course_router");

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


//Listening to port
app.listen(3000, () => {
  console.log("App is listening to port 3000");
});
