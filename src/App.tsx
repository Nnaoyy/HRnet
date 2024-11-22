import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CreateEmployee } from "./pages/CreateEmployee"
import { ListEmployee } from "./pages/ListeEmployee"

import './App.css'

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<ListEmployee/>} />
      </Routes>
    </BrowserRouter>
  )
}


