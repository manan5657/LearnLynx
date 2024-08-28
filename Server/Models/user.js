const { boolean } = require("joi");
const mongoose=require("mongoose");
const { use } = require("passport");
const passportLocal=require("passport-local-mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    teacher:{
        type:Boolean,
        default:false,
    },
    token:{
        type:String,
        default:null
    }
})

userSchema.plugin(passportLocal);

module.exports=mongoose.model("User",userSchema);

