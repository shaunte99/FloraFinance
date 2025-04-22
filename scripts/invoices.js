function generateInvoice() {
    const clientName = document.getElementById("clientName").value;
    const service = document.getElementById("service").value;
    const amount = document.getElementById("amount").value;
    const invoiceDate = document.getElementById("invoiceDate").value;
    const invoiceNumber = document.getElementById("invoiceNumber").value;
  
    const invoiceText = `
  Invoice Number: ${invoiceNumber}
  Client: ${clientName}
  Service: ${service}
  Amount: R${amount}
  Date: ${invoiceDate}
  
  Thank you for choosing Flora Finance! 🌸
    `;
  
    document.getElementById("invoice-output").textContent = invoiceText;
  }
  
  function printInvoice() {
    const content = document.getElementById("invoice-output").textContent;
    const newWindow = window.open('', '', 'height=500,width=800');
    newWindow.document.write('<pre>' + content + '</pre>');
    newWindow.document.close();
    newWindow.print();
  }
  
  function downloadInvoice() {
    const text = document.getElementById("invoice-output").textContent;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Invoice.txt";
    link.click();
  }
  