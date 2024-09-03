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
module.exports.paymentVerification = async (req, res,next) => {
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
    const owner=course.owner
    const teacher =await Teacher.findOne({id:owner});
    teacher.students.push(auth);
    console.log(teacher);
    // console.log(teacher[0].id);
    user.mylearning.push(id);
    course.students.push(auth);
    await user.save();
    await course.save();
    await teacher.save();
    res.status(200).json({
      success: true,
      user
    });
    next();
  } else {
    res.json({
      success: false,
    });
  }
};



module.exports.inspaymentVerification = async (req, res,next) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    const { auth } = req.query;

    // Validate auth as a valid ObjectId

    // Generate signature
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    // Signature verification
    if (generated_signature === razorpay_signature) {
      const user = await User.findById(auth);
      const teacher=  new Teacher({id:auth});
      teacher.save();

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      user.teacher = true;
      await user.save();
      next();
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Signature verification failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Payment verification failed",
      error: error.message,
    });
  }
};
