const express=require('express');
const paymentController=require('../Controller/paymentController.js');
const sendMail=require('../mail.js')
const router=express.Router();


router.route('/checkout').post(paymentController.checkOut);

router.post('/paymentverification/:id',paymentController.paymentVerification,sendMail.courseMail);

router.post('/teacherVerification',paymentController.inspaymentVerification,sendMail.teacherMail);

module.exports=router;

