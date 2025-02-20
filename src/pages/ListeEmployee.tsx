import { useState, useContext } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import EmployeesContext from "../contexts/employee.context";
import SearchBar from "../components/SearchBar";
//import { employeeData } from "../mock/employeesDatas";

interface Employee {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  birthDate: string;
  street: string;
  city: string;
  state: string;
  zip: number;
}

const columns = [
  { name: 'First Name', selector: (row: Employee) => row.firstName, sortable: true },
  { name: 'Last Name', selector: (row: Employee) => row.lastName, sortable: true },
  { name: 'Start Date', selector: (row: Employee) => row.startDate, sortable: true },
  { name: 'Department', selector: (row: Employee) => row.department, sortable: true },
  { name: 'Date of Birth', selector: (row: Employee) => row.birthDate, sortable: true },
  { name: 'Street', selector: (row: Employee) => row.street, sortable: true },
  { name: 'City', selector: (row: Employee) => row.city, sortable: true },
  { name: 'State', selector: (row: Employee) => row.state, sortable: true },
  { name: 'Zip Code', selector: (row: Employee) => row.zip, sortable: true },
];

export function ListEmployee() {

  const { employees } = useContext(EmployeesContext) ?? { employees: [] };
  // const employees = employeeData;
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm) {
      const filtered = employees.filter(employee =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(employees);
    }
  }

  return (
    <>
      <div className='container'>
        <h1>Current Employees</h1>
        <SearchBar onSearch={handleSearch} />
        <DataTable
          columns={columns}
          data={filteredEmployees}
          pagination
          className="table"
        />
        <Link to='/'>Home</Link>
      </div>
    </>
  )
}