import React from 'react';

class Employee extends React.Component {

    constructor(props){
        super(props);
        this.state={
            name:"Mahendra",
            age: 24,
            salary: 40000,
            companyName:"careerx",
            changeName:" "
        }
        this.changeName=this.changeName.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    

    changeName(){
        
        console.log(this);
        console.log(this.state);
        console.log(this.state.name);
        this.setState({name:this.state.changeName});
        this.state.changeName="";
        

    }
    handleChange(event){

      this.setState({changeName:event.target.value});
    //   this.setState({name:event.target.value});
    }
    render(){

        return(
            <div>
                <h1>Hello from class based component</h1>
                <h1>Name of Employee: {this.state.name}</h1>
                <h1>Age of Employee: {this.state.age}</h1>
                <h1>salary of Employee: {this.state.salary}</h1>
                <h1>company name: {this.state.companyName}</h1>
                <h1>experience: {this.props.experience}</h1>
                <input type="text" value={this.state.changeName} onChange={this.handleChange}></input>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    
        }


}

export default Employee;