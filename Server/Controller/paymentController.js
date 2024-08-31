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
  const{razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
  generated_signature = hmac_sha256(razorpay_order_id + "|" + razorpay_payment_id, process.env.RAZORPAY_API_SECRET);

    if (generated_signature == razorpay_signature) {
      res.status.json({
        success:true,
      })
  }
  else{
    res.json({
      success:false,
    })
  }
     }
