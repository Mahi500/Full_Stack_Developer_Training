const http= require("http");


var users=[

    {  name:"Mahendra",
       age: 23

    },

    {

        name:"Anand",
        age: 24
    }

    ]
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
    else{
        // res.writeHead(400,{content:"application/text"},headers);
        res.writeHead(400,headers);
        res.end("404 file not found");
    }
})


server.listen(5000)