import { departmentRepository } from "../repositories/departmentRepository";
import type { Department } from "../types/department";


export const getAllDepartments = () => {
  return departmentRepository.getAll();
};


export const getDepartmentById = (id: string) => {
  return departmentRepository.getById(id);
};


export const createDepartment = (data: Omit<Department, "id">) => {
  return departmentRepository.create(data);
};


export const updateDepartment = (id: string, data: Partial<Department>) => {
  return departmentRepository.update(id, data);
};


export const removeDepartment = (id: string) => {
  return departmentRepository.remove(id);
};
