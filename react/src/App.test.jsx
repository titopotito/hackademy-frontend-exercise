import { App } from "./App.jsx";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

const sampleData = [
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
];

test("", () => {
    render(<App />);
});

afterEach(cleanup);
