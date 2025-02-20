import React, { createContext, useState, useEffect } from "react";

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

interface EmployeesContextType {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
}

const EmployeesContext = createContext<EmployeesContextType | null>(null);

export const EmployeesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const storedEmployees = localStorage.getItem("employees");
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      return updatedEmployees;
    });
  };

  return (
    <EmployeesContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesContext;