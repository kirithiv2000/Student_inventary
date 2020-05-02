var express = require("express");
var app = express()
var jwt = require("jsonwebtoken")
var knex = require("./Model/Model")
var morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json())

app.use(require("./Router/get"))
app.use(require("./Router/post"))
app.use(require("./Router/put"))
app.use(require("./Router/del"))
app.use(require("./Router/login"))
app.use(require("./Router/signup"))

app.use((req,res,next)=>{
    var error = new Error("Not found")
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500 );
    res.json({
        message:error.message
    })
})

var port = 2000;

app.listen(port,()=>{console.log(`server listening at ${port}`)});
