var express = require('express');
var router = express.Router();

/* GET users listing. */
//URL: http://localhost:3001/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//URL: http://localhost:3001/users/test
router.get('/test', function(req, res, next) {
  res.send('test thành công');
});

module.exports = router;
