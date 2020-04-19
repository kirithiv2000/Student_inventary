var express = require("express");
var router = express.Router()

router.post("/post",require("../Controller/post"));

module.exports = router

