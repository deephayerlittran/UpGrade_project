import { employeeRepository } from "../repositories/employeeRepository";
import type { Employee } from "../types/employee";  


export const getAllEmployees = () => {
  return employeeRepository.getAll();
};


export const createEmployee = (data: Omit<Employee, "id">) => {
  return employeeRepository.create(data);
};


export const countEmployeesByDepartment = (departmentId: string) => {
  return employeeRepository.countByDepartment(departmentId);
};
