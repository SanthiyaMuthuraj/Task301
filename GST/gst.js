function calculateGSTExclusive(valueOfSupply, gstRate) {
    return (valueOfSupply * gstRate) / 100;
}

function calculateGSTInclusive(valueOfSupply, gstRate) {
    const gstAmount = valueOfSupply - (valueOfSupply / (1 + gstRate / 100));
    return gstAmount;
}

function calculateTax(netPrice) {
    if (netPrice <= 250000) {
        return 0; // No Tax
    } else if (netPrice <= 500000) {
        return netPrice * 0.05; // 5% Tax Slab
    } else if (netPrice <= 1000000) {
        return netPrice * 0.2; // 20% Tax Slab
    } else {
        return netPrice * 0.3; // 30% Tax Slab
    }
}

const valueOfSupply = 500000;
const gstRate = 18;

const gstExclusiveAmount = calculateGSTExclusive(valueOfSupply, gstRate);
const gstInclusiveAmount = calculateGSTInclusive(valueOfSupply, gstRate);

const totalGSTAmount = gstExclusiveAmount + gstInclusiveAmount;
const preGSTAmount = valueOfSupply + totalGSTAmount;

const taxAmount = calculateTax(preGSTAmount);

console.log(`Value of Supply: Rs. ${valueOfSupply}`);
console.log(`GST Exclusive Amount: Rs. ${gstExclusiveAmount}`);
console.log(`GST Inclusive Amount: Rs. ${gstInclusiveAmount}`);
console.log(`Total GST Amount: Rs. ${totalGSTAmount}`);
console.log(`Pre-GST Amount (Net Price): Rs. ${preGSTAmount}`);
console.log(`Tax Amount: Rs. ${taxAmount}`);
