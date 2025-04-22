function calculateTotal() {
    let venue = parseFloat(document.getElementById('venue').value) || 0;
    let decor = parseFloat(document.getElementById('decor').value) || 0;
    let food = parseFloat(document.getElementById('food').value) || 0;
    let misc = parseFloat(document.getElementById('misc').value) || 0;
  
    let total = venue + decor + food + misc;
    document.getElementById('total').innerText = "Estimated Total: R" + total.toFixed(2);
  }
  