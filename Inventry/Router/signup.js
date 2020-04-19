var express = require("express");
var router = express.Router()


router.post("/signup",require("../Controller/signup"))

module.exports = router;