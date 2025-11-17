import { branchRepository } from "../repositories/branchRepository";

export const getAllBranches = () => {
  return branchRepository.getAll();
};

export const createBranch = (data: any) => {
  return branchRepository.create(data);
};
