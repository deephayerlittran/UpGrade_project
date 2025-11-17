import { Request, Response } from "express";
import { departmentService } from "../services/departmentService";
import { countEmployeesByDepartment } from "../services/employeeService";

export const departmentController = {
  async getAll(req: Request, res: Response) {
    const data = await departmentService.getAll();
    res.json(data);
  },

  async getById(req: Request, res: Response) {
    const data = await departmentService.getById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(data);
  },

  async create(req: Request, res: Response) {
    const created = await departmentService.create(req.body);
    res.status(201).json(created);
  },
     async employeeCount(req: Request, res: Response) {
    const departmentId = req.params.id;
    const count = await countEmployeesByDepartment(departmentId);

    res.json({
      departmentId,
      employeeCount: count
    });
  },

  async update(req: Request, res: Response) {
    const updated = await departmentService.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(updated);
  },

  async remove(req: Request, res: Response) {
    await departmentService.remove(req.params.id);
    res.status(204).send();
  }
};
