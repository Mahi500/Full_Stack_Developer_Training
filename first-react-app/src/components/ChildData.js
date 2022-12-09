import React from 'react';

class ChildData extends React.Component{

    constructor(props){
        super(props);
        this.state={

            name:""

        }
    }

    Change(e){
        console.log(e.target.value);
        this.setState({name:e.target.value});
        
    }

    save(){
        
        //this.setState({name:this.state.name});
        this.props.receiveData(this.state.name);
        this.state.name="";

    }



    render(){

        return(

             <div>
              <div>Hello in Child</div>
              <input type="text" value={this.state.name} onChange={(e)=>this.Change(e)}></input>
              <button onClick={()=>this.save()}>save</button>
             </div>
             

        )
    }
}


export default ChildData;