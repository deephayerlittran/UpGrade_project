import { departmentRepository } from "../repositories/departmentRepository";
import type { Department } from "../types/Department";

export const departmentService = {
  getAll() {
    return departmentRepository.getAll();
  },

  getById(id: string) {
    return departmentRepository.getById(id);
  },

  create(data: Omit<Department, "id">) {
    return departmentRepository.create(data);
  },

  update(id: string, data: Partial<Department>) {
    return departmentRepository.update(id, data);
  },

  remove(id: string) {
    return departmentRepository.remove(id);
  }
};
