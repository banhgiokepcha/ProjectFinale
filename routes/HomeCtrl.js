var express = require('express');
var router = express.Router();
var HomeCtrl = require('../controllers/HomeCtrl')

router.get('/', HomeCtrl.PageIndex)



module.exports = router;
