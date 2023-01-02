class Users{

    constructor(){
     
        this.users=[
               {
                 id:1,
                 name:"Mahendra",
                 age:"23",
                 phone:"549879"

               },
               {
                id:2,
                name:"Manoj",
                age:"21",
                phone:"493287"
               }
        ]

}

add(id,name,age,phone){

    let user={

        id:id,
        name:name,
        age:age,
        phone:phone
    }
    
    this.users.push(user);
    console.log("user added successfully");
    
    console.log(this.users);

}

delete(id){

    this.users= this.users.filter(function(item){

        return item.id!==id;
    })
    console.log("user deleted successfully for id==",id);
    console.log(this.users);
    

}


update(id){

    let Index=this.users.findIndex((obj=>obj.id==id));
    this.users[Index].name="Sathish";
    this.users[Index].age="27";
    this.users[Index].phone="589303";
    console.log("user updated successfully at id==",id);
    console.log(this.users[Index]);
    console.log("updated users")
    console.log(this.users);

}

getAll(){

    let all=this.users.map((user,index)=>{

        return user;


    })
    console.log("all the users")
    console.log(all);


}








}





const User = new Users();

User.add(3,"Anand","24","5920532");
User.delete(2);
User.update(3);
User.getAll();
