const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateGST(productName, productPrice, productQuantity, rate) {
  const gstRates = {
    '12%': 0.12,
    '5%': 0.05,
    '18%': 0.18,
    '25%': 0.25
  };

  if (!(rate in gstRates)) {
    console.log('Invalid GST rate. Supported rates are 12%, 5%, 18%, and 25%.');
    return null;
  }

  const gstRate = gstRates[rate];
  const totalAmount = productPrice * productQuantity;
  const gstAmount = totalAmount * gstRate;
  const finalAmount = totalAmount + gstAmount;

  return {
    'Product Name': productName,
    'Product Price': productPrice,
    'Product Quantity': productQuantity,
    'GST Rate': rate,
    'GST Amount': gstAmount,
    'Total Amount': finalAmount
  };
}

function printBill(billData) {
  if (billData) {
    console.log('\n***** BILLING *****');
    for (const [key, value] of Object.entries(billData)) {
      console.log(`${key}: ${value}`);
    }
    console.log('*******************');
    console.log('---ThankYoForBuying---')
  } else {
    console.log('Error generating bill.');
  }
  rl.close();
}

// Example usage
rl.question('Enter product name: ', (productName) => {
  rl.question('Enter product price: ', (productPrice) => {
    rl.question('Enter product quantity: ', (productQuantity) => {
      rl.question('Enter GST rate (12%, 5%, 18%, 25%): ', (rate) => {
        const billData = calculateGST(productName, parseFloat(productPrice), parseInt(productQuantity), rate);
        printBill(billData);
      });
    });
  });
});
