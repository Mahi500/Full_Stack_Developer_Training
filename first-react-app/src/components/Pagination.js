import {useState} from 'react';
import CustomPagination from './CustomPagination';
var usersdata=[
    {
        id:1,
        name:"test1"

    },
    {
        id:2,
        name:"test2"

    },
    {
        id:3,
        name:"test3"

    },
    {
        id:4,
        name:"test4"

    },{
        id:5,
        name:"test5"

    },
    {
        id:6,
        name:"test6"

    },{
        id:7,
        name:"test7"

    },
    {
        id:8,
        name:"test8"

    },
    {
        id:9,
        name:"test9"

    },
    {
        id:10,
        name:"test10"

    },
]



function Pagination(){

    const [users,setUsers]=useState(usersdata);
    const [currentPage,setCurrentPage]=useState(1);
    const [usersPerPage,setUsersPerPage]=useState(3);
    const totalPages=Math.ceil(users.length/usersPerPage);
    
    const indexOfLastUser=currentPage*usersPerPage;   // last user for that page only, according to list this value is ok,it is not array index
    const indexOfFirstUser=indexOfLastUser-usersPerPage; // index of array

    const displayUsers=users.slice(indexOfFirstUser,indexOfLastUser) // array index
    return(

        <div>
            <table className='table table-primary'>
                <thead>
                   <tr>
                    <th>ID</th>
                    <th>Name</th>
                   </tr>
                </thead>
                <tbody>
                  {
                    displayUsers.map((user)=>{
                         
                        return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                        )
                    })
                  }
                </tbody>
            </table>
            <CustomPagination currentPage={currentPage}   setCurrentPage={setCurrentPage} totalPages={totalPages}/>
        </div>
    )
}


export default Pagination;