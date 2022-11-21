import Header from './Header';
import User from './User';
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company from './Company';

function App() {

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
