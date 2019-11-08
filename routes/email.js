const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

//Login Form
router.get('/', function (req, res) {
    emailController.loadEmails(req, res);
});

module.exports = router;