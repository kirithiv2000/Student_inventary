var knex = require("../Model/Model")

module.exports = (req,res)=>{
    knex('about').where({id:req.params.id}).update(req.body).then((result)=>{
        res.status(200).json({
            message:"Updated succesfully!!"
        })
    })
}
