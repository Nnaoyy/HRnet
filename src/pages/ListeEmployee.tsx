import { Link } from 'react-router-dom';

export function ListEmployee () {

    return(
        <>
        <div id="employee-div" >
            <h1>Current Employees</h1>
            <table id="employee-table" ></table>
            <Link to='/'>Home</Link>
        </div>
        </>
    )
}