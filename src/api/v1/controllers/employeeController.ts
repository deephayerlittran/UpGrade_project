import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employeeService";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req: Request, res: Response) => {
  res.status(501).json({ message: "Not implemented" });
};



export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newEmployee = await employeeService.createEmployee(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    next(error);
  }
};

export const update = async (req: Request, res: Response) => {
  res.status(501).json({ message: "Not implemented" });
};

export const remove = async (req: Request, res: Response) => {
  res.status(501).json({ message: "Not implemented" });
};

export const employeeController = {
  getAll,
  getById,
  create,
  update,
  remove,
};