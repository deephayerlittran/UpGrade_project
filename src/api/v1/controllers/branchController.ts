import { Request, Response, NextFunction } from "express";
import * as branchService from "../services/branchService";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const branches = await branchService.getAllBranches();
    res.status(200).json(branches);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req: Request, res: Response) => {
  res.status(501).json({ message: "Not implemented" });
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBranch = await branchService.createBranch(req.body);
    res.status(201).json(newBranch);
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

export const branchController = {
  getAll,
  getById,
  create,
  update,
  remove,
};