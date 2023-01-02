const express=require("express");
const bodyParser=require("body-parser");
var app=express();
var port=5000;
var users= require('./routes/users');


var jsonParser=bodyParser.json();
app.use(bodyParser.json({type: 'application/*+json'}))
app.use("/users",jsonParser,users);      // jsonparser is a middleware function
app.listen(port,function(){
    console.log(`server is running on ${port}`);
})
// var app=express();   creating instance of app calling express function into app reference creation


// MiddleWare function application level middleware
// app.use(function(req,res,next){

//     console.log("I am calling before routes");
//     res.send("you don't have authorize");
//     next();
// })

// const router=express.Router();

// router.use(function(req,res,next){

//     console.log("Hello I am get routes");
//     res.send("not authorized");
// })

// app.use("/user",router);

// app.get("/",function(req,res){

//     res.send("hello from express js");
// })

// app.get("/student",function(req,res){

//     res.send("hello from student routes");
// })

// app.get("/students",function(req,res){

//     res.send("<html><body><h1>Hello from students</h1></body></html>")
// })

// app.get("/users",function(req,res){

//     res.send([{id:1,name:"Mahendar"},{id:2,name:"Manoj"}]);
// })

// app.listen(5000,function(){

//     console.log("server started at 5000");
// });