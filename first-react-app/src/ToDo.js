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

       let lis=list.filter(item =>!(item.index===id));

        this.setState({list:lis})
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
                                    <button onClick={this.delete({index})}> Delete </button> 
                            
                                    <button>Update</button>


                                     
                                    </div>)

                        })
                    }

                </div>
            </div>

        )





    }

}


export default ToDo;