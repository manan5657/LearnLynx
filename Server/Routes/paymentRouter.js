const express=require('express');
const paymentController=require('../controller/paymentController');
const router=express.Router();


router.route('/checkout').post(paymentController.checkOut);

router.route('/paymentverification/:id').post(paymentController.paymentVerification)

module.exports=router;

