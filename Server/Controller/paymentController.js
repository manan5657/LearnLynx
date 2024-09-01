const Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const crypto=require('crypto');
const User=require('../Models/user');
const Teacher=require('../Models/Teacher');
const Course=require('../Models/courses');


const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

module.exports.checkOut = async (req, res) => {
  var options = {
    amount: Number(req.body.ammount * 100), // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  const order = await instance.orders.create(options);
  res.status(200).json({
    success: true,
    order,
  });
};
module.exports.paymentVerification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
    const {auth}=req.query;
    const{id}=req.params;
    const generated_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");


  if (generated_signature == razorpay_signature) {
    const user=await User.findById(auth);
    const course=await Course.findById(id);
    user.mylearning.push(id);
    course.students.push(auth);
    await user.save();
    await course.save();
    res.status(200).json({
      success: true,
      user
    });
    
    

  } else {
    res.json({
      success: false,
    });
  }
};
