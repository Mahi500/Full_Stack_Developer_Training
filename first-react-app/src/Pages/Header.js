import { Link } from 'react-router-dom';

function Header() {

    return (
        <div>
            {/* <ul>
            <li>
              <Link to="/">Employee</Link>
            </li>
            <li>
              <Link to="/course">Course</Link>
            </li>
            <li>
              <Link to="/student">Student</Link>
            </li>
           </ul> */}

            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/employee">Employee</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/course">Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/student">Student</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/userscrud">Users Crud</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/usersearchpage">Users Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pagination">Pagination</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/selectbox">SelectBoxes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courselist">CourseList</Link>
                            </li>
                             
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Header;