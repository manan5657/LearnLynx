const express=require('express');
const paymentController=require('../Controller/paymentController.js');
const router=express.Router();


router.route('/checkout').post(paymentController.checkOut);

router.route('/paymentverification/:id').post(paymentController.paymentVerification);

router.route('/teacherVerification').post(paymentController.inspaymentVerification);

module.exports=router;

