import {BrowserRouter,Routes,Route} from 'react-router-dom';

import CoursePage from './Pages/CoursePage';
import EmployeePage from './Pages/EmployeePage';
import StudentPage from './Pages/StudentPage';
import Header from './Pages/Header';
import StudentList from './Pages/StudentList';
import Userpage from './Pages/Userpage';

function MainApp(){

    

    return(

        <div className="App">
        

           <BrowserRouter>
           <Header/>
           <Routes>
            <Route path="/employee" element={<EmployeePage/>}></Route>
            <Route path="/course" element={<CoursePage/>}></Route>
            <Route path="/student" element={<StudentPage/>}></Route>
            <Route path="/studentlist" element={<StudentList/>}></Route>
            <Route path="/users" element={<Userpage/>}></Route>
           </Routes>
           </BrowserRouter>
        </div>

    )
}


export default MainApp;