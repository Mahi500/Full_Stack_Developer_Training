const fs= require("fs");


// fs.readFile("hello.txt","utf-8",function(err,data){

//     if(err){

//         console.log(err);
//     }

//     console.log(data);
//     console.log("hello after reading file");
// })


// let data=fs.readFileSync("hello.txt","utf-8");

// console.log(data);

// console.log("after reading the file successfully");



// fs.writeFile("hello1.txt","hello I am here to write the file",function(err,data){


//     if(err){

//         console.log(err);
//     }

//     console.log(data);
// })

fs.writeFileSync("hello.txt","Hello Happy weekend");

fs.appendFile("hello.txt", " Enjoy",function(err){


    console.log(err);
    
});


fs.appendFileSync("hello.txt","Have a fun");