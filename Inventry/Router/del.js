var express = require("express");
var jwt = require("jsonwebtoken")
var router = express.Router()
var callback = require("../Midlleware/Middleware")


router.delete("/del/:id",callback,require("../Controller/del"))

module.exports = router