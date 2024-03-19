// Global variables

// Client debt data
const formDebtCalculator = document.querySelector('.form-debt-calculator');

const currency = document.getElementById('currency');
const totalAmount = document.getElementById('total-amount');
const annualInterestRate = document.getElementById('annual-interest-rate');
const paymentPeriodInMonths = document.getElementById('payment-period-in-months');
const additionalCredits = document.getElementById('additional-credits');
const additionalCreditsAmount = document.getElementById('additional-credits-amount');

// Show results
const amountMonthlyPayment = document.getElementById('amount-monthly-payment');
const totalInterest = document.getElementById('total-interest');
const amountSaved = document.getElementById('amount-saved');
const effectiveMonthlyRate = document.getElementById('effective-monthly-rate');

// Functions to calculate debt


// Listen for form submission
formDebtCalculator.addEventListener('submit', function(event) {

    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values entered by the user
    const currencyValue = currency.value;
    const totalAmountValue = parseFloat(totalAmount.value);
    const annualInterestRateValue = parseFloat(annualInterestRate.value);
    const paymentPeriodInMonthsValue = parseInt(paymentPeriodInMonths.value);
    const additionalCreditsChecked = additionalCredits.ariaChecked;

    // Calculate the results

    // Display the results
    console.log(`estamos recibiendo los datos 
    ${currencyValue},
    ${totalAmountValue},
    ${annualInterestRateValue},
    ${paymentPeriodInMonthsValue},
    ${additionalCreditsChecked}.
    `);

})