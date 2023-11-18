var express = require('express');
var router = express.Router();

/* GET home page. */
//URL: http://localhost:3001/
router.get('/', function(req, res, next) {
  res.render('index');
});

//URL: http://localhost:3001/badinh
router.get('/badinh', function(req, res, next) {
  res.render('badinh');
});

//URL: http://localhost:3001/dongda
router.get('/dongda', function(req, res, next) {
  res.render('dongda');
});

//URL: http://localhost:3001/hoankiem
router.get('/hoankiem', function(req, res, next) {
  res.render('hoankiem');
});

//URL: http://localhost:3001/haibatrung
router.get('/haibatrung', function(req, res, next) {
  res.render('haibatrung');
});

module.exports = router;
