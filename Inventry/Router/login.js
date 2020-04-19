var express = require("express");
var router = express.Router()

router.post("/login",require("../Controller/login"));

module.exports = router