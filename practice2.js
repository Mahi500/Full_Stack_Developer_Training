function userDb(){

    console.log("getting user details");

    setTimeout(function(){
        var obj= {
            id: 1,
            name:"Mahendra"
        }
        return obj;
    },4000)

}

function roleDb(){
    console.log("getting roles details")

    setTimeout(function(){
        var obj= {
            id:1,
            role: "admin"
        }

        return obj;
    },5000)

}


function print(){
console.log("hi");

}

async function userandrole(){

    let users= await userDb();
    console.log("users fetched", users);
    let roles= await roleDb();
    console.log("roles fetched",roles);
    print();
}

userandrole();