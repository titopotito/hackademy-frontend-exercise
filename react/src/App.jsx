import { useState, useEffect, useMemo, useRef, forwardRef } from "react";
import { v4 } from "uuid";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [expenses, setExpenses] = useState(() => {
        const savedItem = localStorage.getItem("dataKey");
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || [];
    });
    const [initialRender, setInitialRender] = useState(true);
    const titleRef = useRef();
    const amountRef = useRef();

    useEffect(() => {
        localStorage.setItem("dataKey", JSON.stringify(expenses));
        // alert() will not run on initial render. Only when new expense are added.
        initialRender ? setInitialRender(false) : alert("Added New Expense");
    }, [expenses]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = titleRef.current.value;
        const amount = amountRef.current.value;

        setExpenses([...expenses, { id: v4(), title: title, amount: +amount }]);

        titleRef.current.value = "";
        amountRef.current.value = "";
    };

    return (
        <>
            <h1>James Tito's Expense Tracker</h1>
            <form id="input-section" onSubmit={handleSubmit}>
                <InputGroup ref={titleRef} label="Description" type="text" placeholder="Enter Description" />
                <InputGroup ref={amountRef} label="Amount" type="number" placeholder="Enter Amount" />
                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
            <h2>
                Total Expenses <Total data={expenses} />
            </h2>
            <section id="display-section">
                <h3>My Expenses</h3>
                <ExpenseList data={expenses} />
            </section>
        </>
    );
}

const InputGroup = forwardRef((props, ref) => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} ref={ref} required />
        </div>
    );
});

function Total(props) {
    const total = useMemo(() =>
        props.data
            .reduce(function (total, expense) {
                return total + expense.amount;
            }, 0)
            .toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
    );

    return (
        <em>
            PHP <span>{total}</span>
        </em>
    );
}

function ExpenseList(props) {
    if (props.data.length === 0) {
        return <p className="default-message">No Expense Written</p>;
    }

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
