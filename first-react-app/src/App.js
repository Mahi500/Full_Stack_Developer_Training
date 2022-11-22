import Header from './Header';
import User from './User';
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company from './Company';
import { useState } from 'react';

function App() {

  let msg="hello good morning";

  let result= `hi ${msg}`;
  console.log(result);

  let address={

    state:"Telangana",
    district:"Warangal",
    village:"cheemakurthi",
    pincode:522590
  }

  let {state,district,village,pincode}=address;

  console.log(state);
  console.log(district);
  console.log(village);
  console.log(pincode);

const ages=[50,60,70];

console.log(ages[0],ages[1],ages[2]);

const [first,second,third]= ages;
console.log(first,second,third);

const [color,setColor]= useState(80);
  const age=60;
  return (
    
    <div className="App">
      <Header/>                                     
      <Header/>
      <User name="Mahendra" type="text"/>
      <h1>MY FIRST REACT APP HELLO REACT {age}</h1>
      <Employee/>
      <EmployeeWithFunction/>
      <Company Companyname="Careerx"/>
    </div>
    
  );
}

export default App;
