import { useState } from "react";
import ExpenseList from "./components/ExpenseTracker/Components/ExpenseList";
import ExpenseFilter from "./components/ExpenseTracker/Components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseTracker/Components/ExpenseForm";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 5, category: "Groceries" },
        { id: 2, description: "bbb", amount: 5, category: "Utilities" },
        { id: 3, description: "ccc", amount: 5, category: "Entertainment" },
        { id: 4, description: "ddd", amount: 5, category: "Entertainment" },
    ]);

    const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

    return (
        <div>
            <div className="mb-5">
                <ExpenseForm
                    onSubmit={(newExpense) =>
                        setExpenses([
                            ...expenses,
                            { ...newExpense, id: expenses.length++ },
                        ])
                    }
                ></ExpenseForm>
            </div>
            <div className="mb-3">
                <ExpenseFilter
                    onSelectCategory={(category) =>
                        setSelectedCategory(category)
                    }
                ></ExpenseFilter>
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) =>
                    setExpenses(expenses.filter((e) => e.id !== id))
                }
            ></ExpenseList>
        </div>
    );
}

export default App;
