var knex = require("../Model/Model")
var jwt = require("jsonwebtoken")


module.exports = (req,res)=>{
    var user = req.body.name
    console.log(user)

    knex.select("*").from("login").then((result)=>{
       var flag = true;
       var flag1 = true;
       for (var i of result){
           if (user === i.name){
               flag = false
           }
           if (req.body.password === i.password){
               flag1 = false
                that = i
           }
       }
       if (flag && flag1){
        res.status(404).json({message:"Login First!!!"})
       }
       else if (flag == true && flag1 == false){
        res.status(404).json({message:"user is wrong"})
       }
       else if (flag == false && flag1 == true){
           res.status(404).json({message:"password is wrong"})
       }
       else if (flag == false && flag1 == false){
           console.log("login sucessfully")
           jwt.sign(user,"secretkey",(err,token)=>{
               if (err) throw err;
               res.status(201).json({
                   token
               })
           }) 
       }
    })
     
}
