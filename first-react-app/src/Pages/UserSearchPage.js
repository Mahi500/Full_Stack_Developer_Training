import { useState } from 'react';
var usersdata = [

    {
        id: 1,
        name: "Mahendra"
    },
    {
        id: 2,
        name: "Manoj"
    },
    {
        id: 3,
        name: "Satish"
    },
    {
        id: 4,
        name: "Anand"
    },
    {
        id: 5,
        name: "Gopi"
    }

]




function UserSearchPage() {

    const [users, setUsers] = useState(usersdata);
    const [searchkey,setSearchkey]= useState("");
    const [name,setName]=useState("");
    const [id,setId]=useState("");
    
    const searchUser=(e)=>{
        console.log(e.target.value);
        setSearchkey(e.target.value);

        if(searchkey){

        const filteredUsers= users.filter((user)=>{

                return user.name.toLowerCase().includes(searchkey.toLowerCase());


            })

            setUsers(filteredUsers);


        }
        else{

            setUsers(usersdata);
        }
    }
    
    const deleteuser=(data)=>{
              
        const filteredusers=users.filter((user)=>{

            return user.id !==data.id
        })

        setUsers(filteredusers);


    }
    const idChange=(e)=>{

        setId(e.target.value);
    }

    const nameChange=(e)=>{

        setName(e.target.value);
        
    }

    const adduser=()=>{

        let user={id,name}

        setUsers((prev)=>[...prev,user]);
        setId("");
        setName("");
        
    }


    return (

        <div>
            <div className="container">
                <h1>From Users Search Component</h1>
                <div className="row">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search User" value={searchkey} onChange={(e)=>searchUser(e)}/>
                            <span className="input-group-text" id="basic-addon2" style={{"background":"green","color":"#fff"}}>Search</span>
                            {/* <span className="input-group-text" id="basic-addon2" style={{"background":"green","color":"#fff"}} onChange={filtereduser}>Search</span> */}
                    </div>

                </div>
                <div className="row">
                    {users.length===0 && <h1>No result found</h1>}
                    <ul style={{ listStyle: "none" }}>
                        {users.map((user, index) => {

                            return (

                                <li  key={user.id}>
                                    <span>{user.id} {user.name}</span>
                                    <span><button style={{marginLeft:"30px",fontSize:"10px",fontWeight:"600"}} onClick={()=>deleteuser(user)}>X</button></span>
                                </li>
                            )



                        })}
                    </ul>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={id} onChange={(e)=>idChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={name} onChange={(e)=>nameChange(e)}/>
                </div>
                <div>
                    <button onClick={adduser} className="btn btn-primary">Add User</button>
                </div>
            </div>
        </div>
    )
}

export default UserSearchPage;