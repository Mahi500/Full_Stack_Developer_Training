import Header from './Header';
//import User from './User';
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company from './Company';
import { useState } from 'react';
import {user, sayHi} from './ModuleDemo';
import * as u from './ModuleDemo';
import sayHello from './ModuleDemo';
import ToDo from './ToDo';
import User from './components/User';
import Article from './components/Article';
import Counter from './components/Counter';
import Parent from './components/Parent';
import ParentData from './components/ParentData';
import Form from './components/functionalcomponents/Form';
import UseEffectHook from './components/hooks/UseEffect';
import MenuItem from './components/hooks/PropsDrilling';
import Context from './components/hooks/UseContext';
import UseReducer from './components/hooks/UseReducerDemo';
import UseRefDemo from './components/hooks/useRefDemo';
import UseCallback from './components/hooks/UseCallback';
import Usememo from './components/hooks/UseMemo';
import Memo from './components/hooks/Memo';
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

function add(a,b,c)
{
     console.log(a+b+c);
}

var numbers=[40,50,60];

add(...numbers);

let [a,b,c] =[...numbers];
console.log(a,b,c);

var array1=[2,3,4];
var array2=[5,6,7];

var res= [...array1,...array2];

console.log(res);
function showRest(a,b,c,...d){

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

showRest(2,3,4,5,6,7);

console.log(user);
sayHi();
console.log(u.user);
u.sayHi();

sayHello();
  const age=60;
  return (
    
    <div className="App">
      
      {/* <Header/>                                     
      <Header/>
      <User name="Mahendra" type="text"/>
      <h1>MY FIRST REACT APP HELLO REACT {age}</h1>
      <EmployeeWithFunction/>
      <Company Companyname="Careerx"/>
      <Employee experience="five years"/> */}
      {/* <ToDo/> */}
      {/* <User/> */}
      {/* <Article/> */}
      {/* <Counter/> */}
      {/* <Parent/> */}
      {/* <ParentData/> */}
      {/* <Form/> */}
      {/* <UseEffectHook/> */}
      {/* <MenuItem/> */}
      {/* <Context/> */}
      {/* <UseReducer/>
      <UseRefDemo/> */}
      {/* <UseCallback/>
      <Usememo/> */}
      <Memo/>
    </div>
    
  );
}

export default App;
