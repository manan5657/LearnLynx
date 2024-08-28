const { boolean } = require("joi");
const mongoose=require("mongoose");
const { use } = require("passport");
const passportLocal=require("passport-local-mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    email:{
        type:String,
        require:true,
    },
    teacher:{
        type:boolean,
        default:false,
    }
})

userSchema.plugin(passportLocal);

module.exports=mongoose.model("User",userSchema);

