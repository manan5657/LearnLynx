const mongoose=require('mongoose');

const teacherSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student"
        }
    ],
    mobile:{
        type:String,
        require:true,
    },
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
})

module.exports=mongoose.model("Teacher",teacherSchema);