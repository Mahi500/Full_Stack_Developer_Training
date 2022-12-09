import React from 'react';
import ChildData from './ChildData';


class ParentData extends React.Component{

      constructor(props){
          
        super(props);

        this.state={

            name:"Mahi"

        }

      }

      receivedData(data){
          
        this.setState({name:data});


      }


      render(){


        return(
            
            <div>
                <div>My Name is {this.state.name}</div>
                <ChildData receiveData={(data)=>this.receivedData(data)}/>
            </div>
            
        )
      }





}

export default ParentData;