const mongoose = require('mongoose');


const teacherSchema = mongoose.Schema({
  id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true, // Ensures uniqueness within the array (supported in MongoDB 3.6+)
    }
  ]
});

// Pre-save hook to remove duplicates
teacherSchema.pre('save', function(next) {
  this.students = [...new Set(this.students)]; 
  next();
});

module.exports = mongoose.model("Teacher", teacherSchema);
