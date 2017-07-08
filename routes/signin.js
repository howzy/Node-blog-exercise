var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.get('/signin', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /signin 用户登录
router.post('/signin', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

module.exports = router;