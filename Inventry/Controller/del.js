var knex = require("../Model/Model")

module.exports=(req,res)=>{
    knex("about").where("id",req.params.id).del().then((result)=>{
        res.status(200).json({
            message:"Deleted succesfully!!!"
        })
    })
}