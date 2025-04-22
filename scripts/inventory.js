let totalProfit = 0;

document.getElementById('inventoryForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const itemName = document.getElementById('itemName').value;
  const itemQty = parseInt(document.getElementById('itemQty').value);
  const itemCost = parseFloat(document.getElementById('itemCost').value);
  const expectedRevenue = parseFloat(document.getElementById('expectedRevenue').value);

  const totalCost = itemCost * itemQty;
  const profit = expectedRevenue - totalCost;
  totalProfit += profit;

  const tableBody = document.getElementById('inventoryTableBody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${itemName}</td>
    <td>${itemQty}</td>
    <td>R${totalCost.toFixed(2)}</td>
    <td>R${expectedRevenue.toFixed(2)}</td>
    <td>R${profit.toFixed(2)}</td>
  `;

  tableBody.appendChild(newRow);
  document.getElementById('totalProfit').textContent = totalProfit.toFixed(2);

  // Reset the form
  document.getElementById('inventoryForm').reset();
});

function downloadInventory() {
  const rows = document.querySelectorAll("#inventoryTableBody tr");
  let content = "Item,Quantity,Total Cost,Revenue,Profit\n";

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    const data = Array.from(cells).map(cell => cell.textContent.replace("R", ""));
    content += data.join(",") + "\n";
  });

  content += `\nTotal Profit,,,\nR${totalProfit.toFixed(2)}`;

  const blob = new Blob([content], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "inventory_summary.csv";
  a.click();
}
