import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={

            name:""
        }
        // this.handleClick1=this.handleClick1.bind(this);
    }

    // handleClick1(event){

    //     console.log("clicked1",event);
    //     this.setState({name:"Mahendra"});
    // }
    // handleClick2(event){

    //     console.log("clicked2",event);
    //     this.setState({name:"Mahendra"});
    // }
    handleClick3 = (event)=>{

        console.log("clicked3",event);
        this.setState({name:"Mahendra"});
    }
    // handleClick4(event){

    //     console.log("clicked4",event);
    //     this.setState({name:"Mahendra"});
    // }

    render(){

        return(

            <div>
             <h1>Hello I am in Components User {this.state.name} </h1>
             {/* <button onClick={this.handleClick1}>Click1</button>
             <button onClick={this.handleClick2.bind(this)}>Click2</button> */}
             <button onClick={this.handleClick3}>Click3</button>
             {/* <button onClick={(event)=>this.handleClick4(event)}>Click4</button> */}
            </div>

            
        )
    }
}


export default User;