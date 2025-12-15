const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const totalEl = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function render() {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach((exp, index) => {
    total += exp.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      ${exp.title} - ₹${exp.amount}
      <button data-index="${index}">❌</button>
    `;

    list.appendChild(li);
  });

  totalEl.textContent = total;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);

  if (!title || amount <= 0) {
    alert("Invalid input");
    return;
  }

  expenses.push({ title, amount });
  titleInput.value = "";
  amountInput.value = "";
  render();
});

// Event delegation (IMPORTANT concept)
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.dataset.index;
    expenses.splice(index, 1);
    render();
  }
});

render();
