
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateEMI(loanAmount, tenure, creditScore) {
  
  let interestRate = 0.05; 
  if (creditScore >= 700) {
    interestRate -= 0.02; 
  } else if (creditScore < 500) {
    interestRate += 0.03; 
  }

  
  const monthlyInterestRate = interestRate / 12;
  const timePeriod = tenure * 12;

 
  const emi =
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, timePeriod)) /
    (Math.pow(1 + monthlyInterestRate, timePeriod) - 1);

  return emi.toFixed(2);
}

rl.question('Enter Loan Amount: ', (loanAmount) => {
  rl.question('Enter Loan Tenure: ', (tenure) => {
    rl.question('Enter Customer Credit Score: ', (creditScore) => {
      const emi = calculateEMI(parseFloat(loanAmount), parseInt(tenure), parseInt(creditScore));
      console.log(`\nEMI: ${emi}`);
      rl.close();
    });
  });
});
