const joi = require("joi");

module.exports.courseSchema = joi.object({
  title: joi.string().required(),
  price: joi.number().positive().required(),
  discountPrice: joi.number().positive().less(joi.ref("price")).required(),
  img: joi.string().required(),
});


<<<<<<< HEAD
module.exports.userSchema=joi.object({
  username:joi.string().required,
  email:joi.string().required(),
  password:joi.string().required()
})


=======
>>>>>>> e52bfa57c5322068323eea9593dea3afdf9b26c6
