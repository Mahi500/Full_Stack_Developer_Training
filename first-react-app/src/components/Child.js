import React from 'react';

class Child extends React.Component{
    constructor(props){
        console.log("I am in child constructor");
        super(props);

        this.state={

        }
    }

    static getDerivedStateFromProps(props,state){
        // this method is responsible for changing the state and props. this method will be called for changing any value
        console.log(props);
        console.log("I am in child getDerivedStateFromProps");
        return {}
    }

    shouldComponentUpdate(){
        // it will further render the changes.If we return true then only move to further rendering or else stop the further steps.
        console.log("I am child shouldComponentUpdate");
        return true;
    }

    
    componentDidMount(){
        console.log("I am in child componentDidMount");
    }

    getSnapshotBeforeUpdate(props,state){
        console.log("I am in child getSnapshotBeforeUpdate");
        console.log(props,state);
        return props;
    }
    componentDidUpdate(){
        console.log("I am in child componentDidUpdate");
    }

    componentWillUnmount(){
        // we can clean the files from DOM
        prompt("your form is unsaved pls save it");
        console.log("I am unmounting");
    }
    render(){
             
        console.log("I am in child rendering");
        return(

            <div>
            <h1>I am in Child count {this.props.count}</h1>
            </div>


        )


        
    }
}

export default Child;