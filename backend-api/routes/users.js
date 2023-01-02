var express=require("express");
var router=express.Router();

var users=[
            {
                id:1,
                name:"Mahendra",
                age:23,
                phone:"57903455"
            }

]
router.get("/",function(req,res){

    // res.send("hello from user routes");

    res.send(users);
})

router.get("/user/:id",function(req,res){

   let user =users.map(function(item,index){

        if(item.id===Number(req.params.id))
       {
        return item;
       }
    })
 
    res.send(user);

      



})


router.post("/create",function(req,res){
     console.log()
    const {id,name,age,phone}= req.body;
    users.push({id,name,age,phone});
    res.send("user created successfully");
})

//passing id as parameter :id postman will consider id as params id
router.delete("/delete/:id",function(req,res){
      console.log(req.params.id);
    let filteredUsers=users.filter(function(item){

        return item.id!==Number(req.params.id);
    })

    users=[...filteredUsers];
    res.send("Deleted user successfully");

})

router.put("/update/:id",function(req,res){

    users.map(function(item,index){

        if(item.id===Number(req.params.id))
        {

            item.name="";
            item.age="";
            item.phone="";
        }


    })

    console.log("user updated successfully");


})

module.exports=router;