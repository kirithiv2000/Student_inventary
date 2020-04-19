var express = require("express");
var router = express.Router()


router.put("/put/:id",require("../Controller/put"))

module.exports = router
