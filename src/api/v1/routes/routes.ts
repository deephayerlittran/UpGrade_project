import express from "express";
import branchRoutes from "./branchRoutes";
import employeeRoutes from "./employeeRoutes";

const router = express.Router();

router.use("/branches", branchRoutes);
router.use("/employees", employeeRoutes);

export default router;
