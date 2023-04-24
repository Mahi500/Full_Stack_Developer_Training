var express=require("express");
var Employee=require("./models/employeeModel");
var router=express.Router();


router.post("/create",function(req,res){

    const employee=new Employee({

        name:req.body.name,
        age:req.body.name,
        phone:req.body.phone,
        company:req.body.company
    })

    employee.save().then(function(data){

        console.log("employee created successfully");
        res.send("employee created successfully");
    }).catch(function(err){

           console.log(err);

    })

})


module.exports=router;