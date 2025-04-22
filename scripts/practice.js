function showPractice(type) {
    const section = document.getElementById("practice-section");
    switch (type) {
      case "budget":
        section.innerHTML = `
          <h2>💸 Budgeting Practice</h2>
          <p>Plan a R30,000 wedding. Allocate funds to the categories below:</p>
          <form>
            <label>Venue: <input type="number" placeholder="e.g. 10000" /></label><br><br>
            <label>Decor: <input type="number" placeholder="e.g. 5000" /></label><br><br>
            <label>Catering: <input type="number" placeholder="e.g. 7000" /></label><br><br>
            <label>Entertainment: <input type="number" placeholder="e.g. 3000" /></label><br><br>
            <label>Other: <input type="number" placeholder="e.g. 5000" /></label><br><br>
            <button type="button" onclick="alert('Check if your total matches R30,000!')">Check Budget</button>
          </form>`;
        break;
  
      case "vendor":
        section.innerHTML = `
          <h2>📦 Vendor Payment Practice</h2>
          <p>Enter details of a sample vendor:</p>
          <form>
            <label>Vendor Name: <input type="text" placeholder="e.g. Bella Chairs" /></label><br><br>
            <label>Service: <input type="text" placeholder="e.g. Chair Rentals" /></label><br><br>
            <label>Total: <input type="number" placeholder="e.g. 2500" /></label><br><br>
            <label>Paid: <input type="number" placeholder="e.g. 1500" /></label><br><br>
            <button type="button" onclick="alert('Payment Tracking Complete!')">Submit</button>
          </form>`;
        break;
  
      case "invoice":
        section.innerHTML = `
          <h2>🧾 Invoice Practice</h2>
          <p>Preview what an invoice might look like:</p>
          <ul>
            <li><strong>Client:</strong> Thando M.</li>
            <li><strong>Service:</strong> Garden Decor Package</li>
            <li><strong>Total:</strong> R6,000</li>
            <li><strong>Status:</strong> Unpaid</li>
          </ul>
          <button onclick="alert('Invoice Sent!')">Mark as Sent</button>`;
        break;
  
      case "inventory":
        section.innerHTML = `
          <h2>📊 Inventory Practice</h2>
          <p>Track an item and calculate profit:</p>
          <form>
            <label>Item: <input type="text" placeholder="e.g. Fairy Lights" /></label><br><br>
            <label>Quantity: <input type="number" placeholder="e.g. 10" /></label><br><br>
            <label>Cost per Item: <input type="number" placeholder="e.g. 100" /></label><br><br>
            <label>Rental Price per Event: <input type="number" placeholder="e.g. 200" /></label><br><br>
            <button type="button" onclick="alert('Check your profit!')">Calculate</button>
          </form>`;
        break;
    }
  }
  