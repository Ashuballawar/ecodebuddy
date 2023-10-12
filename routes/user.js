const express = require('express');
const getDataMiddleware=require('../middleware/auth')
const userController = require('../controllers/user');
const bookingController=require('../controllers/booking')
const getinfocontroller=require('../controllers/getinfo')
const router = express.Router();


router.post('/user',userController.adduserdata)

module.exports=router;