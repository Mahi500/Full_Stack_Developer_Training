import React from 'react';

class Company extends React.Component{

    constructor(props){

        super(props);
        this.state={
            
            companyaddress:"hyd"
        }

    }
    
    render(){
        return(
            <div>
                <h1>Company name is {this.props.Companyname}</h1>
                <h1>Company address is {this.state.companyaddress}</h1>
            </div>
        )
    }
}

export default Company;