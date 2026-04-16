import express from "express";
import { generatePlan } from "../controllers/planController.js";
import { getTasks, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/generate-plan", generatePlan);
router.get("/tasks", getTasks);
router.post("/tasks/update", updateTask);

export default router;
