import {BrowserRouter,Routes,Route} from 'react-router-dom';

import CoursePage from './Pages/CoursePage';
import EmployeePage from './Pages/EmployeePage';
import StudentPage from './Pages/StudentPage';
import Header from './Pages/Header';
import StudentList from './Pages/StudentList';
import CourseListPage from './Pages/CourseListPage';
import userslist from './Pages/CourseListPage'
import UsersCrud from './Pages/UsersCrud';
import UserSearchPage from "./Pages/UserSearchPage";
import Pagination from './components/Pagination';
import SelectBoxes from './components/SelectBoxes';

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
            {/* ><Route path="/users" element={<Userpage/>}></Route */}
            <Route path="/courselist" element={<CourseListPage/>}></Route>
            {/* <Route path="/userscrud" element={<UsersCrud/>}></Route>
            <Route path="/usersearchpage" element={<UserSearchPage/>}></Route>
            <Route path="/pagination" element={<Pagination/>}></Route>
            <Route path="/selectbox" element={<SelectBoxes/>}></Route> */}
           </Routes>
           </BrowserRouter>
        </div>

    )
}


export default MainApp;