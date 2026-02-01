import { Router } from "express";
import { branchController } from "../controllers/branchController";

const router = Router();

router.get("/", branchController.getAll);
router.get("/:id", branchController.getById);
router.post("/", branchController.create);
router.put("/:id", branchController.update);
router.delete("/:id", branchController.remove);

export default router;
