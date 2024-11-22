import { Link } from 'react-router-dom';
import { Form } from '../components/Form';




export function CreateEmployee () {

    return(
        <>
        <div className='title'>
            <h1>HRnet</h1>
        </div>
        <div className='container'>
        <Link to='/employees'>View Current Employees</Link>
            <h2>Create Employee</h2>
            <Form/>
        </div>
        </>
    )
}