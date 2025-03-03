import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false,
        optional: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }   
})

const expense = mongoose.model('expense', expenseSchema);

export default expense;