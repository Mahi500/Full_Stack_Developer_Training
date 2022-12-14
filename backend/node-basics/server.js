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



    console.log(req);
    if(req.url==='/'){
        
        console.log("hello i am in / request",req);
        res.writeHead(200,{content:"application/text"});
        res.end("hello world")
    
    }
    else if(req.url==='/student'){

        console.log("student",req,req.url,req.method);

        res.writeHead(200,{content:"application/json"});
        res.end(JSON.stringify({name:"sameer",id:2}));
    }

    else if(req.url='/users'){

        res.writeHead(200,{content:"application/json"});
        res.end(JSON.stringify(users));

    }
    else{

        res.writeHead(400,{content:"application/text"});
        res.end("404 file not found");
    }
})


server.listen(5000)