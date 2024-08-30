<<<<<<< HEAD

const mongoose=require("mongoose");
=======
const { time } = require("console");
const mongoose=require("mongoose");
const { type } = require("os");
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6

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
<<<<<<< HEAD
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"Teacher"
=======
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
    }
})

module.exports=mongoose.model("Course",courseSchema);
