var knex = require("../Model/Model")

exports.getall = (req,res)=>{
    knex.select().from("about").then((result)=>{
        res.status(200).json({
            Data:result
        })
    })
}

exports.get = (req,res)=>{
    knex("about").select("*").where("id",req.params.id).then((result)=>{
        res.status(200).json({
            result:result
        })
    })
}
