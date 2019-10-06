const cnv = require("./conversions");

const express = require('express');
const router = express.Router();


router.post('/verifyConversions', cnv.processConversionForm);

module.exports = router;

