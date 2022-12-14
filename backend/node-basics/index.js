console.log("hello learning node");

var module= require("./module")

console.log(module);

module.add(5,7);

// function add(a,b){

//     console.log("sum of two numbers = ",a+b);
// }

// add(2,3)


// function subtract(a,b){

//     console.log("result=", a-b);

// }


// subtract(9,2)


// function multiply(a,b){

//     console.log("multiplication result=", a*b);
// }


// multiply(5,3);


// let c=5

// if(c%2===0)
// {
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }


// let arr=[2,9,7,5]

// for(var i=0;i<4;i++){

//     console.log(arr[i]-1);
// }

var data=require("./calculator");

console.log(data.cal.add(2,3));
console.log(data.cal.subtract(3,2));
console.log(data.cal.multiply(3,2));