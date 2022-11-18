function UserDb(){
    console.log("getting users from db");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        console.log("got users from db");
        resolve( [{
        Id: 1,
        name: "sameer",
        age:30

    },{
        Id: 2,
        name: "Raju",
        role:"user",
        age:35
    }])
},4000)})

    
}

function RoleDb(){
    console.log("getting roles from db");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        console.log("got roles");
        resolve( [{
            id: 1,
            role:"admin"
        },{
            id: 2,
            role: "user"
        }])
    },5000)})

    
}


/*async function getUsersandtheirroles(){

    let users= await UserDb();
    console.log("users fetched:", users);
    let roles= await RoleDb();
    console.log("roles fetched:", roles);

    print(roles);
    

}*/

function getUsersandtheirrolespromise(){

    UserDb().then(function(res){

        console.log("users fetched:",res);
        RoleDb().then(function(res){
            console.log("roles fetched:", res);
            print(res);
        })
    })

}

function print(fn){
    if(fn[0].role=='admin')
    {
      console.log("you are an admin");
    }
    else
    {
      console.log("you are not an admin");
    }
}

//getUsersandtheirroles();
getUsersandtheirrolespromise();