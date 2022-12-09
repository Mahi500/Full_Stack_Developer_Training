// Life-cycle methods are applicable for class based components only.
// Component Life cycle---> Life cycle includes three phases 1)Mounting--> Initial rendering 2)Updating --> rerendering 3)Unmounting --> destroying
// Every component will go through these phases in their Life cycle 
// Mounting phase has 4 methodes. Update phase means after setting the state how components are rendering again.
// Update means changing state or props. There are 5 methodes
import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(){
        console.log("I am in constructor");
        super();
        this.state={
            count: 0,
            show: true
        }
    }
    static getDerivedStateFromProps(props,state){
        // place where we can initialize the state from props
        console.log("i m getDerivedStateFromProps");

        return {}
    }

    componentDidMount(){

        // API call
        console.log("i m ComponentDidMount");
    }

    increment(e){

        this.setState({count:this.state.count+1});
    }
    hide(){

        this.setState({show:!this.state.show});
    }
    render(){
        console.log("rendering");
        return(

                 <div>
                    <h1>I am in Parent count {this.state.count}</h1>
                    <button className="btn btn-success" onClick={(e)=>this.increment(e)}>Increment</button>
                    <button onClick={()=>this.hide()}>Hide Child</button>
                    {this.state.show && <Child count={this.state.count}/>}
                 </div>

        )
    }
}

export default Parent;