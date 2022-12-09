import React from 'react';


class Counter extends React.Component{
    
    constructor(){

        super();

        this.state={

            count:1
        }
    }

    increment(){

        var c = this.state.count+1;
        this.setState({count:c});
        // this.setState({count:this.state.count+1});
    }

    decrement(){

        var c = this.state.count-1;
        this.setState({count:c});
        // this.setState({count:this.state.count-1});

    }
    
    
    render(){

        console.log("rendering");
        return(

            <div>
                <h1>Counter Example</h1>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={(e)=>this.increment(e)}className='btn btn-primary'>Increment</button>
                <button onClick={(e)=>this.decrement(e)}className='btn btn-danger'>Decrement</button>
            </div>

        )
    }
}


export default Counter;