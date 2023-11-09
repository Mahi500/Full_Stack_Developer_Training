import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';


const initialState={

    courseName:"",
    instructorName:"",
    startDate:"",
    endDate:"",
    schedule:""
}



function CoursePage() {

    const [course,setCourse]=useState(initialState);

    const dispatch=useDispatch();

    const navigate=useNavigate()

    const handleCourseChange=(e)=>{

        setCourse((prevItem)=>({
    
            ...prevItem,
            [e.target.name]:e.target.value
    
        }))
    
    }
    
    const createCourse=()=>{
    
        console.log("course data=", course);

        dispatch({type:"ADD_COURSE", payload: course})

        navigate('/courselist')
    }

    return (

        <div className="container">
            <div className="mb-3">
                <label className="form-label">Course Name</label>
                <input type="email" className="form-control" name="courseName" value={course.courseName} onChange={(e)=>handleCourseChange(e)} placeholder="enter course name"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Instructor Name</label>
                <input type="email" className="form-control" name="instructorName" value={course.instructorName} onChange={(e)=>handleCourseChange(e)} placeholder="enter course name"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Start Date</label>
                <input type="email" className="form-control" name="startDate" value={course.startDate} onChange={(e)=>handleCourseChange(e)} placeholder="enter course name"/>
            </div>
            <div className="mb-3">
                <label className="form-label">End Date</label>
                <input type="email" className="form-control" name="endDate" value={course.endDate} onChange={(e)=>handleCourseChange(e)} placeholder="enter course name"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Schedule</label>
                <input type="email" className="form-control" name="schedule" value={course.schedule} onChange={(e)=>handleCourseChange(e)}  placeholder="enter course name"/>
            </div>
            <button className="btn btn-primary" onClick={()=>{createCourse()}}>Create Course</button>
        </div>
    )
}

export default CoursePage;