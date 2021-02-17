const express = require('express');
const router = express.Router();
const createMail = require('../controllers/contact')

router.post("/", createMail.sendMail);

module.exports = router ;