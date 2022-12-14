function add(a,b){

    console.log("addition", a+b);
}

function subtract(a,b){

    console.log("subtract", a-b);
}

function multiply(a,b){

    console.log("multiply", a*b);
}

exports.cal={

    add,
    subtract,
    multiply
}