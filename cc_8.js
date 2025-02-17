// Task1- Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // Setting formula.
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);
}; // Writing function that computes the net salary.
// Test Data
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"

// Task2- Function Expression
const calculateDiscount = function (price, discountRate) {
    let finalPrice = price - (price * discountRate); // Setting formula.
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); 
}; // Declaring function to determine final price. 
// Test Data 
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"
