import { useEffect,useState } from "react";

function Userpage(){

    const [users,setUsers]=useState([]);
    useEffect(()=>{

        fetch("http://localhost:5000/users").then(function(res){
          
        
        return res.json();

        }).then(function(result){

            console.log(result);
            setUsers(result);
        })
    },[])

    return(

        <div>
            <h1>I am in userlist page</h1>
            <div>
                {
                    users.map((user,index)=>{

                        return  (<div key={index}><h1>Name:{user.name} Age: {user.age}</h1></div>)
                    })


                }

            </div>

        </div>
    )
}


export default Userpage;