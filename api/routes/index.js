var express = require('express');
var router = express.Router();
const curd = require("mongodb-curd");

/* 查找 */
router.get('/api/list', function(req, res, next) {
    curd.find("test", "week3-1", function(arr) {
        if (arr.length > 0) {
            res.json({ code: 1, msg: "查询到数据", data: arr })
        } else {
            res.json({ code: 2, msg: "没有查询到数据" })
        }
    })
});
router.get('/api/list2', function(req, res, next) {
    curd.find("test", "week3-2", function(arr) {
        if (arr.length > 0) {
            res.json({ code: 1, msg: "查询到数据", data: arr })
        } else {
            res.json({ code: 2, msg: "没有查询到数据" })
        }
    })
});

module.exports = router;