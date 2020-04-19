var express = require("express");
var jwt = require("jsonwebtoken")
var router = express.Router()
var callback = require("../Midlleware/Middleware")


router.get("/getall",callback,require("../Controller/get").getall)

router.get("/get/:id",require("../Controller/get").get)

module.exports = router;