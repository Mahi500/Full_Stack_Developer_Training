import React from 'react';


class ToDo extends React.Component {

    constructor() {
        super();
        this.state = {
            courseName: "",
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }


    saveCourse() {


        const list = this.state.list;
        list.push(this.state.courseName);
        this.setState({ list: list });
        this.state.courseName = "";


    }


    handleChange(event) {
        this.setState({ courseName: event.target.value });

    }

    delete(id){

        let li =[];
        li=this.state.list;
        let lis=[];
        lis=li.filter(item =>!(item.index===id));

        this.setState({list:lis})
    }

    change(id,e){

        const list=[];

        list= this.state.list;

        list[id]=e.target.value;

        this.setState({list:list})


    }

    render() {


        return (

            <div>
                <h1>ToDo List</h1>
                <input type="text" id="save" value={this.state.courseName} onChange={this.handleChange} placeholder="enter item" />
                <button onClick={this.saveCourse}>Save</button>
                <div>


                    {
                        this.state.list.map((item,index) => {

                            return (<div>
                                     {item} 
                                    <button onClick={this.delete(index)}> Delete </button> 
                            
                                    <button onClick={this.change(index)}>Update</button>


                                     
                                    </div>)

                        })
                    }

                </div>
            </div>

        )





    }

}


export default ToDo;