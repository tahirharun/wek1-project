let total = 0;

document.getElementById("add-btn").addEventListener("click", function () {
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const date = document.getElementById("date").value;
  const tableBody = document.getElementById("expenses-table-body");

  if (!category || isNaN(amount) || !date) {
    alert("Please fill in all fields.");
    return;
  }

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${category}</td>
    <td>${amount.toFixed(2)}</td>
    <td>${date}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  tableBody.appendChild(row);
  total += amount;
  document.getElementById("total-amount").innerText = total.toFixed(2);

  document.getElementById("amount").value = '';
  document.getElementById("date").value = '';

  // Add delete event
  row.querySelector(".delete-btn").addEventListener("click", function () {
    row.remove();
    total -= amount;
    document.getElementById("total-amount").innerText = total.toFixed(2);
  });
});
