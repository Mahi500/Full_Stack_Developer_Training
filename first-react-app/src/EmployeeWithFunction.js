import {useState} from 'react';

function EmployeeWithFunction(){

    const [name,setName]=useState("mahendra")
    const [age,setAge] =useState(24);
    return (

        <div>
            <h1>Hello from employee function based component {name} {age}</h1>
        </div>
    )
}

export default EmployeeWithFunction;