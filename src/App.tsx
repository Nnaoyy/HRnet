import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CreateEmployee } from "./pages/CreateEmployee"
import { ListEmployee } from "./pages/ListeEmployee"
import { EmployeesProvider } from "./contexts/employee.context";
import Modal from 'react-modal';

import './App.css'

Modal.setAppElement('#root');

export default function App() {


  return (
    <EmployeesProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employees" element={<ListEmployee/>} />
        </Routes>
      </BrowserRouter>
    </EmployeesProvider>
  )
}


