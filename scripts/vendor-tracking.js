function markPaid(button) {
    const row = button.parentNode.parentNode;
    row.style.backgroundColor = "#d0f0c0"; // soft green
    row.cells[5].innerHTML = "✅ Paid";
  }
  
  document.getElementById("vendorForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("vendorName").value;
    const service = document.getElementById("service").value;
    const total = document.getElementById("totalAmount").value;
    const paid = document.getElementById("amountPaid").value;
    const due = document.getElementById("dueDate").value;
  
    const table = document.getElementById("vendor-table");
    const row = table.insertRow();
  
    row.innerHTML = `
      <td>${name}</td>
      <td>${service}</td>
      <td>R${total}</td>
      <td>R${paid}</td>
      <td>${due}</td>
      <td><button onclick="markPaid(this)">Mark Paid</button></td>
    `;
  
    document.getElementById("vendorForm").reset();
  });
  