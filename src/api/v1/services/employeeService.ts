import { employeeRepository } from "../repositories/employeeRepository";
import type { Employee } from "../types/Employee";

export const getAllEmployees = () => {
  return employeeRepository.getAll();
};

export const createEmployee = (data: Omit<Employee, "id">) => {
  return employeeRepository.create(data);
};
