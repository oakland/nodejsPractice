var express = require('express');
var router = express.Router();
var orm = require('orm');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.end('welcome to EXPRESS');
});

//selectspcfn start
function selectspcfn(req, res) {
    orm.connect("mysql://root:@localhost/baiduNews", function(err, db) {
        if (err) throw err;
        var Newslist = db.define("newslist", {
            url: String,
            pic: String,
            title: String,
            content: String,
            time: Date,
            topic: String,
            id: { type: 'serial', key: true }
        });
        Newslist.find({topic:req.body.topic}, function(err, newslist) {
            if (err) throw err;
            res.json(newslist);
        });
    });
}; //selectspcfn end

//selectfn start
function selectfn(req, res) {
    orm.connect("mysql://root:@localhost/baiduNews", function(err, db) {
        if (err) throw err;
        var Newslist = db.define("newslist", {
            url: String,
            pic: String,
            title: String,
            content: String,
            time: Date,
            topic: String,
            id: { type: 'serial', key: true }
        });
        /*db.define('newslist',{})，这个函数后面的第一个参数，
        即本例中的newslist表示的是baiduNews这个数据库中的newslist表格如果把这个参数的名字写错，例如，写成newslists，
        会报错Table 'baidunews.newslists' doesn't exist*/
        Newslist.find({}, function(err, newslist) {
            if (err) throw err;
            // console.log(err);
            res.json(newslist);
        });
    });
}; //selectfn end

//deletefn start
function deletefn(req, res) {
    orm.connect("mysql://root:@localhost/baiduNews", function(err, db) {
        if (err) throw err;
        var Newslist = db.define("newslist", {
            url: String,
            pic: String,
            title: String,
            content: String,
            time: Date,
            topic: String,
            id: { type: 'serial', key: true }
        });
        Newslist.find({ id: req.body.id }).remove(function(err) {
            res.send('DELETE success!');
        });
    });
}; //deletefn end

//updatefn start
function updatefn(req, res) {
    // console.log(req.body.id);
    orm.connect("mysql://root:@localhost/baiduNews", function(err, db) {
        if (err) throw err;
        var Newslist = db.define("newslist", {
            url: String,
            pic: String,
            title: String,
            content: String,
            time: Date,
            topic: String,
            id: { type: 'serial', key: true }
        });
        Newslist.get(req.body.id, function(err, newslist) {
            newslist.save({
                url: req.body.url,
                pic: req.body.pic,
                title: req.body.title,
                content: req.body.content,
                topic: req.body.topic,
                time: req.body.time
            }, function(err) {
                console.log("saved!");
                res.send('UPDATE success!');
            });
        });
    });
}; //updatefn end

//insertfn
function insertfn(req, res) {
    orm.connect("mysql://root:@localhost/baiduNews", function(err, db) {
        if (err) throw err;
        var Newslist = db.define("newslist", {
            url: String,
            pic: String,
            title: String,
            content: String,
            time: Date,
            topic: String,
            id: { type: 'serial', key: true }
        });
        Newslist.create([{
            url: req.body.url,
            pic: req.body.pic,
            title: req.body.title,
            content: req.body.content,
            topic: req.body.topic,
            time: req.body.time
        }], function(err, items) {
            res.send('success');
        });
    });
}; //insertfn end

router.post('/selectspc', selectspcfn);
router.post('/select', selectfn);
router.post('/delete', deletefn);
router.post('/update', updatefn);
router.post('/insert', insertfn);

//用模板引擎展现页面
router.get('/home', function(req, res, next) {
    res.render('home');
});
router.get('/login', function(req, res, next) {
    res.render('login');
});
router.get('/admin', function(req, res, next) {
    res.render('adminsys');
});

module.exports = router;
