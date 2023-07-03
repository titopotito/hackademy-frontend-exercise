import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [expenses, setExpenses] = useState([
        {
            id: 1,
            title: "Rent",
            amount: 1000,
        },
        {
            id: 2,
            title: "Groceries",
            amount: 200,
        },
        {
            id: 3,
            title: "Utilities",
            amount: 150,
        },
        {
            id: 4,
            title: "Transportation",
            amount: 100,
        },
        {
            id: 5,
            title: "Entertainment",
            amount: 50,
        },
    ]);

    return (
        <>
            <h1>James Tito's Expense Tracker</h1>
            <form id="input-section">
                <InputGroup id="description" label="Description" type="text" placeholder="Enter Description" />
                <InputGroup id="amount" label="Amount" type="number" placeholder="Enter Amount" />
                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
            <h2>
                Total Expenses <Total data={expenses} />
            </h2>
            <section id="display-section">
                <h3>My Expenses</h3>
                <List data={expenses} />
            </section>
        </>
    );
}

function InputGroup(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} id={props.id} />
        </div>
    );
}

function Total(props) {
    const total = props.data
        .reduce(function (total, expense) {
            return total + expense.amount;
        }, 0)
        .toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

    return (
        <em>
            PHP <span>{total}</span>
        </em>
    );
}

function List(props) {
    const expenseList = props.data.map((expense) => (
        <li key={expense.id.toString()} className="expense-li">
            <p>{expense.title}</p>
            <p className={expense.amount > 100 ? "red" : "green"}>
                PHP{" "}
                <span>
                    {expense.amount.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </span>
            </p>
        </li>
    ));

    return <ul>{expenseList}</ul>;
}

export { App };
