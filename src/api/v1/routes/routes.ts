import departmentRoutes from "./departmentRoutes";
import express from "express";
import branchRoutes from "./branchRoutes";
import employeeRoutes from "./employeeRoutes";

const router = express.Router();

router.use("/branches", branchRoutes);
router.use("/employees", employeeRoutes);
router.use("/departments", departmentRoutes);

export default router;
