const joi = require("joi");

module.exports.courseSchema = joi.object({
  title: joi.string().required(),
  price: joi.number().positive().required(),
  discountPrice: joi.number().positive().less(joi.ref("price")).required(),
  img: joi.string().required(),
});


