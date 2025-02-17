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

// Task3- Arrow Function
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05; // Apllying fee of 15%, 10%, and 5% of the amount.
    let serviceFee = amount * feeRate;
    console.log(`Service Fee: $${serviceFee.toFixed(2)}`);
}; // Writing an arrow function that applies fee. 
// Test Data
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"

// Task4- Parameters and Arguments
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = carType === "Economy" ? 40 : carType === "Standard" ? 60 : 100; // Applying costs of $40, $60, and $100 per day. 
    let totalCost = days * dailyRate;
    if (insurance) totalCost += days * 20; // Extra $20 per day for insurance. 
    console.log(`Total Rental Cost: $${totalCost}`);
}; // Writing a function that calculates rental costs. 
// Test Data
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

// Task5- Returning Values
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time); // Setting formula.
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
}; // Writing a function that returns total loan payment. 
// Test Data
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"

