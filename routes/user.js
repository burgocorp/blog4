const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const userModel = require('../models/user');


//user register
router.post('/register',(req,res)=>{

});
//user login
router.post('/login',(req,res)=> {

});
//user currents
router.get('/currents', (req,res)=> {

});

module.exports = router;