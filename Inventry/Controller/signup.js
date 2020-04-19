var knex = require("../Model/Model")

module.exports = (req,res)=>{
    knex.select("*").from("login").then((result)=>{
        flag = true
        for (var i of result){
            if (i.name === req.body.name){
                flag = false;
            }   
        }
        if (flag == false){
            res.status(404).json({
                message:"User name exists Please Enter another name"
            })
        }else if (flag == true){
            knex("login").insert(req.body).then((result)=>{
                res.status(201).json({
                    message:"login sucessfully"
                })
            })
        }

    })
}
