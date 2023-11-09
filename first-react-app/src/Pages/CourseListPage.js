import { useSelector} from "react-redux";

export default function Courselist() {

    const courses = useSelector((state) => state.courses.courses);

    return (
        <div>
            <h3>Course List</h3>
            <ul>
                {
                    courses.map((course, index) => {

                        return (
                                <div>
                                <li key={index}>
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-primary" aria-current="true">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{course.courseName}</h5>
                                            <small>{course.startDate} to {course.endDate}</small>
                                        </div>
                                        <p className="mb-1">{course.instructorName}</p>
                                        <small>Time: {course.schedule}</small>
                                    </a>
                                    <br/>
                                </div>
                                </li>
                                </div>

                        )
                    })
                }
            </ul>
        </div>
    )
}