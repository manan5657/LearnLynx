const Razorpay=require('razorpay');
const dotenv=require('dotenv');
dotenv.config({path:'../.env'});

const instance=new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

module.exports.checkOut=async(req,res)=>{
    var options = {
        amount: Number(req.body.ammount*100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      const order=await instance.orders.create(options);
      res.status(200).json({
        success:true,
        order
      })
}
module.exports.paymentVerification=async(req,res)=>{  
    res.status(200).json({
      success:true,
    })
}