import React from 'react';


class ToDo extends React.Component{
     
    constructor(){
        super();
        this.state={
            courseName:"",
            list: []
        }
         this.handleChange=this.handleChange.bind(this);
        this.saveCourse=this.saveCourse.bind(this);
    }
    
    
    saveCourse(){
       
       
       const list = [...this.state.list];
       list.push(this.state.courseName);
       this.setState({list:list});
       this.state.courseName="";

       
    }
    

    handleChange(event){
       this.setState({courseName:event.target.value})
             
    }
    
    render(){
        
        
        return(
            
            <div>
                <input type="text" value={this.state.courseName} onChange={this.handleChange} placeholder="enter item"/>
                <button onClick={this.saveCourse}>Save</button>
                <div>
                 <h1>ToDo List</h1>
                 <ul>
                    <li>{this.state.list[0]}</li>
                    <li>{this.state.list[1]}</li>
                    <li>{this.state.list[2]}</li>
                    <li>{this.state.list[3]}</li>
                    <li>{this.state.list[4]}</li>
                 </ul>
                </div>
            </div>
        
        )
    
        
        
    

    }

}


export default ToDo;