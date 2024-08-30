const Schema = require("./Schema.js");
const ExpressError = require("./utils/ExpressError.js");

<<<<<<< HEAD

=======
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
module.exports.validateCourse = (req, res, next) => {
  let { error } = Schema.courseSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    res.json(new ExpressError(400,errMsg));
  } else {
    next();
  }
};
<<<<<<< HEAD

module.exports.validateUser=(req,res,next)=>{
  let error=Schema.userSchema.valid(req.body);
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    res.json(new ExpressError(400,errMsg));
  }
  else{
    next();
  }
}
=======
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
