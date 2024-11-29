import { Link } from 'react-router-dom';
import  Form  from '../components/Form';
import { departments } from "../mock/departments";
import { states } from "../mock/states";




export function CreateEmployee () {

    return(
        <>
        <div className='title'>
            <h1>HRnet</h1>
        </div>
        <div className='container'>
        <Link to='/employees'>View Current Employees</Link>
            <h2>Create Employee</h2>
            <Form
                departments={departments.map((department: string) => department)}
                states={states.map((state: { name: string; abbreviation: string }) => ({
                name: state.name,
                abbreviation: state.abbreviation,
                }))}
            />
        </div>
        </>
    )
}