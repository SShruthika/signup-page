const express = require('express');
const router =express.Router();
const cors = require('cors')
const { test, registerUser ,loginuser}=require('../controllers/authController')
router.use(
    cors({
        credentials:true,
        origin: 'http://localhost:5173'
    })
)

router.get('/',test)
router.post('/register',registerUser)
router.post('./login',loginuser)

module.exports = router