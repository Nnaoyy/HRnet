import React, { useState, useContext } from "react";
import EmployeesContext from "../contexts/employee.context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';
import { Select } from 'react-select-by-nnaoyy';

interface FormProps {
  states: { name: string; abbreviation: string }[];
  departments: string[];
}


const Form: React.FC<FormProps> = (props) => {
  const employeeContext = useContext(EmployeesContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState<number | null>(null);
  const [department, setDepartment] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const employeValid = () => {

    if (firstName == '' || lastName == '' || startDate == null || department == '' || birthDate == null || street == '' || city == '' || state == '' || zip == null) {
      return false;
    }
    return true;
  }

  const handleSubmit = () => {
    if (employeeContext && employeValid()) {
      const employee = {
        firstName,
        lastName,
        startDate: startDate.toLocaleDateString("en-US"),
        department,
        birthDate: birthDate.toLocaleDateString("en-US"),
        street,
        city,
        state,
        zip: zip !== null ? zip : 0,
      };
      employeeContext.addEmployee(employee);
      setIsOpen(true);
    } else {
      console.error("EmployeeContext is null");
    }
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name"
          onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name"
          onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          id="date-of-birth"
          selected={birthDate}
          onChange={(date) => date ? setBirthDate(date) : null}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          ariaLabelClose="Close"
        />


        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          id="start-date"
          selected={startDate}
          onChange={(date) => date ? setStartDate(date) : null}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          ariaLabelClose="Close"
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text"
            onChange={(e) => setStreet(e.target.value)} />

          <label htmlFor="city">City</label>
          <input id="city" type="text"
            onChange={(e) => setCity(e.target.value)} />

          <label htmlFor="state">State</label>
          <Select
            options={props.states}
            onChange={(e) => setState(e)}
            placeholder="Please select a state"
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || /^[0-9\b]+$/.test(value)) {
                setZip(value === "" ? null : parseInt(value));
              }
            }} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select
          options={props.departments}
          onChange={(e) => setDepartment(e)}
          placeholder="Choose Department"
        />
      </form>

      <button onClick={handleSubmit}>Save</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Employee Created"
        className="modal"
      >
        <button onClick={closeModal} className="closeButton">X</button>
        <p className="textModal">Employee Created!</p>
      </Modal>
    </>
  )
};
export default Form;