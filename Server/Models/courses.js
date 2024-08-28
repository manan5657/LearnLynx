const { time } = require("console");
const mongoose=require("mongoose");
const { type } = require("os");

const Schema=mongoose.Schema;

const courseSchema= new Schema({
    title:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true
    },
    discountPrice:{
        type:Number,
        require:true
    },
    img:{
        type:String
    }
})

module.exports=mongoose.model("Course",courseSchema);
