// Get HTML elements
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const calculateButton = document.getElementById('calculate-btn');
const clearButton = document.getElementById('clear-btn');
const resultParagraph = document.getElementById('result');

// Add event listener to calculate button
calculateButton.addEventListener('click', (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Get input values
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value) / 100; // Convert rate to decimal
    const time = parseFloat(timeInput.value);

    // Check for invalid input values
    if (isNaN(principal) || principal <= 0) {
        resultParagraph.textContent = 'Please enter a valid principal amount.';
        return;
    }

    if (isNaN(rate) || rate < 0) {
        resultParagraph.textContent = 'Please enter a valid interest rate.';
        return;
    }

    if (isNaN(time) || time <= 0) {
        resultParagraph.textContent = 'Please enter a valid time period.';
        return;
    }

    // Calculate interest
    const interest = principal * rate * time;

    // Calculate total amount
    const totalAmount = principal + interest;

    // Display result
    resultParagraph.textContent =` Interest: $${interest.toFixed(2)}\nTotal Amount: $${totalAmount.toFixed(2)}`;
});

// Add event listener to clear button
clearButton.addEventListener('click', () => {
    // Clear input fields
    principalInput.value = '';
    rateInput.value = '';
    timeInput.value = '';

    // Clear result paragraph
    resultParagraph.textContent = '';
});