const express = require('express');
const router = express.Router();
const authenticator = require('../controllers/authentication');

//Login Form
router.get('/', function (req, res) {
    res.render('signin');
});

//Forgot password
router.get('/forgotpassword', function (req, res) {
    res.render('forgotPassword', {
        user: req.user
    });
});

//Register Form
router.get('/register', function (req, res) {
    res.render('register');
});

//login process
router.post('/login', authenticator.login);

module.exports = router;