const express = require('express');

const userController = require('../controller/userdata');

const router = express.Router();


router.post(userController.addData)
router.get(userController.getdata)
module.exports=router;