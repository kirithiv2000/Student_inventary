var knex = require("../Model/Model")

module.exports = (req,res)=>{
    knex("about").insert(req.body).then((result)=>{
        res.status(201).json({
            message:"Inserted perfectly!!!"
        })
    })
}
