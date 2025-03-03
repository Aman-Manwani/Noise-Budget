import { Request, Response } from "express";
import expenseModel from "../models/expenseModel";

export const getAllExpense = async(req : Request, res : Response) => {
    try{
        const expenses = await expenseModel.find();
        res.status(200).json(expenses);
    }catch(error){
        console.log("error getting all expenses", error);
    }
}

export const addExpense = async(req : Request, res : Response) => {
    try{
        const expense = new expenseModel(req.body);
        await expense.save();
        res.status(200).json(expense);
    }catch(error){
        console.log("error adding expense", error);
    }
}