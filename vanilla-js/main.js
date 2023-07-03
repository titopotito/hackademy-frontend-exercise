const expenses = [
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

const expenseList = document.getElementById("expense-list");
const totalExpense = document.getElementById("total-expense");

// Format and display expenses from expense[] array
expenses.forEach((expense) => {
    let expenseEntry = document.createElement("li");
    expenseEntry.innerHTML = `
      <li>
        <p>${expense.title}</p>
        <p>PHP <span>${expense.amount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}</span></p>
      </li>
    `;
    expenseList.appendChild(expenseEntry);
});

// Calculate total expense, format it with commas and decimals, then display it
totalExpense.textContent = expenses
    .reduce(function (total, expense) {
        return total + expense.amount;
    }, 0)
    .toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
