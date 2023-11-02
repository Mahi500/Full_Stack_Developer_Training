import {useState, useEffect} from 'react';

export default function UseEffectHook(){

    const [name,setName]=useState("");
    const [age,setAge]=useState(0)
    const [user,setUser]=useState({userId:"",title:"",id:"",completed:""})

    useEffect(()=>{

        console.log("This is the first time we are rendering");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
             .then((res)=>res.json())
             .then((data)=>{console.log(data)})
             .then((data)=>{setUser((prevItems)=>(
                {
                    ...prevItems, userId:data.userId, title:data.title, id:data.id, completed:data.completed
                }
             ))})
             

    },[name,age])

    const changeName=(e)=>{
        e.preventDefault();
        setName("Sameer")
    }

    const changeAge=()=>{

        setAge(30)
    }

    return(
        <div>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeAge}>Change Age</button>
            <h4>{user.userId}</h4>
            <h4>{user.id}</h4>
            <h4>{user.title}</h4>
            <h4>{user.completed}</h4>
            <table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{user.userId}</td>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.completed}</td>
                </tr>

            </tbody>
            </table>
        </div>
    )
}