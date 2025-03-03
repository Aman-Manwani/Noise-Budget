import { Router } from "express";
import { addExpense, getAllExpense } from "../controllers/expenseController";

const router = Router();

router.get('/getexpenses', getAllExpense);

router.post('/addExpense', addExpense);

export default router;