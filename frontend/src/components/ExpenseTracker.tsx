import { useState, useEffect } from "react";
import axios from "axios";

interface Expense {
  amount: number;
  category: string;
  date: string;
  description?: string;
}

interface Filters {
  startDate: string;
  endDate: string;
  category: string;
}

const categories = [
  "Food & Dining",
  "Transportation",
  "Entertainment",
  "Utilities",
  "Shopping",
  "Health",
  "Travel",
  "Education",
  "Other",
];

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filters, setFilters] = useState<Filters>({
    startDate: "",
    endDate: "",
    category: "",
  });
  const [newExpense, setNewExpense] = useState<Expense>({
    amount: 0,
    category: "",
    date: "",
    description: "",
  });

  // Fetch expenses from backend
  const fetchExpenses = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/getExpenses");
      setExpenses(data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    if (!newExpense.amount || !newExpense.category || !newExpense.date) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await axios.post("http://localhost:8000/addExpense", newExpense);
      setNewExpense({ amount: 0, category: "", date: "", description: "" });
      fetchExpenses(); // Refresh expenses after adding
    } catch (error) {
      console.error("Error adding expense:", error);
      alert("Failed to add expense");
    }
  };

  const filteredExpenses = expenses.filter(
    (exp) =>
      (!filters.startDate || exp.date >= filters.startDate) &&
      (!filters.endDate || exp.date <= filters.endDate) &&
      (!filters.category || exp.category === filters.category)
  );

  const totalExpenses = filteredExpenses.reduce(
    (sum, exp) => sum + exp.amount,
    0
  );

  return (
    <div className="flex gap-4 p-4">
      {/* Sidebar for Filters */}
      <div className="w-1/4 flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Filters</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            className="w-full p-2 border rounded mb-2"
            value={filters.startDate}
            onChange={(e) =>
              setFilters({ ...filters, startDate: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            className="w-full p-2 border rounded mb-2"
            value={filters.endDate}
            onChange={(e) =>
              setFilters({ ...filters, endDate: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-blue-500 py-2 cursor-pointer text-white rounded-md">
          Add Filters
        </button>
      </div>

      {/* Expense Tracker */}
      <div className="w-full bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">Expense Tracker</h1>
        <div className="space-y-2">
          <input
            type="number"
            placeholder="Amount"
            className="w-full p-2 border rounded"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, amount: Number(e.target.value) })
            }
          />
          <div>
            <select
              className="w-full p-2 border rounded"
              value={newExpense.category}
              onChange={(e) =>
                setNewExpense({ ...newExpense, category: e.target.value })
              }
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={newExpense.date}
            onChange={(e) =>
              setNewExpense({ ...newExpense, date: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description (Optional)"
            className="w-full p-2 border rounded"
            value={newExpense.description}
            onChange={(e) =>
              setNewExpense({ ...newExpense, description: e.target.value })
            }
          />
          <button
            className="w-full bg-blue-500 text-white p-2 rounded mt-2 cursor-pointer"
            onClick={addExpense}
          >
            Add Expense
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Expense List</h2>
          <div className="flex gap-3">
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((exp, index) => (
                  <div className="w-1/3 border border-4 border-amber-100 flex flex-col gap-2 text-sm">
                    <div className="text-gray-500 text-xs">
                       Date : {exp.date.split("T")[0]}
                    </div>
                    <div className="flex justify-between">
                      <div className="text-lg font-semibold">{exp.category}</div>
                      <div className="text-green-600 font-bold">
                        ${exp.amount}
                      </div>
                    </div>
                    <div className="text-gray-700 italic">
                      {exp.description}
                    </div>
                  </div>
              ))
            ) : (
              <p className="text-red-500 font-bold">No expenses found</p>
            )}
          </div>
          <h2 className="text-lg font-semibold mt-4">
            Total: ${totalExpenses.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
}
