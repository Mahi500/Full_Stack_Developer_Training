import {useState} from 'react';


export default function Form(){

    const [name,setName]=useState("")
    const [age,setAge]=useState(0)
    const [employeeInfo, setEmployeeInfo]=useState({name:"",age:0})

    const handleNameChange=(e)=>{
        setName(e.target.value);

    }

    const handleAgeChange=(e)=>{

        setAge(e.target.value)

    }

    const save=(e)=>{
        e.preventDefault()
        console.log("data saved successfully")
        setEmployeeInfo((prevState)=>({...prevState,name:name,age:age}))
        setName('')
        setAge(0)
    }

    return(

        <div>
         <form onSubmit={save}>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleNameChange}/>
            <label>Age:</label>
            <input type="number" value={age} onChange={handleAgeChange}/>
            <button type="submit">save</button>
         </form>
         <h1>Employee Info</h1>
         <h4>{employeeInfo.name}</h4>
         <h4>{employeeInfo.age}</h4>
        </div>
    )
}