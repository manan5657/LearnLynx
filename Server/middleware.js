const Schema = require("./Schema.js");
const ExpressError = require("./utils/ExpressError.js");

module.exports.validateCourse = (req, res, next) => {
  let { error } = Schema.courseSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    res.json(new ExpressError(400,errMsg));
  } else {
    next();
  }
};

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
