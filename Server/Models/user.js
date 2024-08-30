const { boolean } = require("joi");
const mongoose=require("mongoose");
const { use } = require("passport");
const passportLocal=require("passport-local-mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
<<<<<<< HEAD
    username:{
        type:String,
        require:true,
        unique: false ,
    },
=======
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
    email:{
        type:String,
        require:true,
    },
<<<<<<< HEAD
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

=======
    teacher:{
        type:boolean,
        default:false,
    }
})

userSchema.plugin(passportLocal);
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6

module.exports=mongoose.model("User",userSchema);

