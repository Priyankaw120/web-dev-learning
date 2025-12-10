interface Expense {
  id: number;
  title: string;
  amount: number;
}

class ExpenseTracker {
  private expenses: Expense[] = [];

  constructor() {
    this.loadFromStorage();
  }

  addExpense(title: string, amount: number) {
    if (!title || amount <= 0) {
      alert("Invalid input!");
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      title,
      amount,
    };

    this.expenses.push(newExpense);
    this.save();
    this.render();
  }

  getTotal(): number {
    return this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  }

  render() {
    const list = document.getElementById("expenseList") as HTMLUListElement;
    const totalSpan = document.getElementById("total") as HTMLSpanElement;

    list.innerHTML = "";

    this.expenses.forEach(exp => {
      const li = document.createElement("li");
      li.innerHTML = `${exp.title} - ₹${exp.amount}`;
      list.appendChild(li);
    });

    totalSpan.textContent = this.getTotal().toString();
  }

  save() {
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

  loadFromStorage() {
    const stored = localStorage.getItem("expenses");
    this.expenses = stored ? JSON.parse(stored) : [];
  }
}

const tracker = new ExpenseTracker();
tracker.render();

const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;

addBtn.addEventListener("click", () => {
  tracker.addExpense(titleInput.value, Number(amountInput.value));
  titleInput.value = "";
  amountInput.value = "";
});
