var express = require('express');
var router = express.Router();

/* GET home page. */
//当前router.get后面的路由已经是root下面的users路由之下了，这个在app.js里面定义了。所以不需要在当前的path里面再加入users！
//即router.get('/users', function() {});这样的写法是错误的。
router.get('/', function(req, res, next) {
    res.end('welcome to userPage');
});
router.get('/1', function(req, res, next) {
    res.end('welcome to userPage id=1');
});
module.exports = router;
