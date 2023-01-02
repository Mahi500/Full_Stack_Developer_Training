const http= require("http");
// node basic -http module
const fs=require("fs");
var users=[

    {  name:"Mahendra",
       age: 23

    },

    {

        name:"Anand",
        age: 24
    }

    ]

    // function show(){

    //     console.log("I am in show function");
    // }
    
    // show();
    // setTimeout(function(){

    //     console.log("Inside set time out");

    // }

    // ,1000)
    // setInterval(function(){

    //     console.log("Inside set time out");

    // }

    // ,1000)
var server = http.createServer(function(req,res){

    const headers={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,POST'};

    // console.log(req);
    if(req.url==='/'){
        
        // console.log("hello i am in / request",req);
        // res.writeHead(200,{content:"application/text"},headers);
        res.writeHead(200,headers);
        res.end("hello world")
    
    }
    else if(req.url==='/student'){

        // console.log("student",req,req.url,req.method);
        // res.writeHead(200,{content:"application/json"},headers);
        res.writeHead(200,headers);
        res.end(JSON.stringify({name:"sameer",id:2}));
    }

    else if(req.url==='/users'){
        
        console.log("users");
        // res.writeHead(200,{content:"application/json"},headers);
        res.writeHead(200,headers);
        res.end(JSON.stringify(users));

    }
    else if(req.url=='/employee'){
         
       var data= fs.readFileSync("emp.js","utf-8");
       res.writeHead(200,headers);
       res.end(JSON.stringify(data));
    }
    else{
        // res.writeHead(400,{content:"application/text"},headers);
        res.writeHead(400,headers);
        res.end("404 file not found");
    }
})


server.listen(5000)