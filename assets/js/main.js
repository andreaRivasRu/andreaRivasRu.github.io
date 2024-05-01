// Global variables

// Client debt data
const formDebtCalculator = document.querySelector('.form-debt-calculator');

const totalAmount = document.getElementById('total-amount');
const annualInterestRate = document.getElementById('annual-interest-rate');
const paymentPeriodInMonths = document.getElementById('payment-period-in-months');
const additionalCredits = document.getElementById('additional-credits');
const additionalCreditsAmount = document.getElementById('additional-credits-amount');
const additionalCreditsAmountLabel = document.getElementById('additional-credits-amount-label');

// Show results
const totalResultsContainer = document.querySelector('.total-results-container')

const totalInterestWithAdditionalCreditsContainer = document.querySelector('#total-interest-with-additional-credits-container');
const newPeriodInMonthsContainer = document.querySelector('#new-period-in-months-container');
const amountSavedContainer = document.querySelector('#amount-saved-container');

const amountMonthlyPayment = document.getElementById('amount-monthly-payment');
const totalInterestWithAdditionalCredits = document.getElementById('total-interest-with-additional-credits');
const newPeriodInMonths = document.getElementById('new-period-in-months');
const totalInterest = document.getElementById('total-interest');
const amountSaved = document.getElementById('amount-saved');
const effectiveMonthlyRate = document.getElementById('effective-monthly-rate');

// Functions to calculate debt
function calcMonthlyRate(annualRate) {
    const monthlyRate = annualRate / 12;
    return monthlyRate;
}

function calcMonthlyPayment(totalAmount, monthlyRate, paymentPeriodInMonths) {
    let monthlyPayment;

    if (monthlyRate === 0) {
        monthlyPayment = totalAmount / paymentPeriodInMonths;
    } else {
        monthlyPayment = totalAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -paymentPeriodInMonths)));
    }

    return monthlyPayment;
}

function calcTotalInterest(totalAmount, monthlyPayment, paymentPeriodInMonths) {
    return (monthlyPayment * paymentPeriodInMonths) - totalAmount;
}



// Listen for form submission
formDebtCalculator.addEventListener('submit', displayResults);
additionalCredits.addEventListener('change', showAmountInput);

function displayResults(event) {

    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values entered by the user
    const totalAmountValue = parseFloat(totalAmount.value);
    const annualInterestRateValue = parseFloat(annualInterestRate.value) / 100;
    const paymentPeriodInMonthsValue = parseInt(paymentPeriodInMonths.value);
    const additionalCreditsChecked = additionalCredits.checked;
    const additionalCreditsAmountValue = parseInt(additionalCreditsAmount.value);

    //calcular interes mensual
    const monthlyRateValue = calcMonthlyRate(annualInterestRateValue);

    //calcular monto de la cuota
    const monthlyPaymentValue = calcMonthlyPayment(totalAmountValue, monthlyRateValue, paymentPeriodInMonthsValue);

    //calcular intereses totales
    const totalInterestValue = calcTotalInterest(totalAmountValue, monthlyPaymentValue, paymentPeriodInMonthsValue);

    //calcular monto ahorrado

    // Display the results
    amountMonthlyPayment.innerText = `${Math.round(monthlyPaymentValue)} $`;
    totalInterest.innerText = `${Math.round(totalInterestValue)} $`;
    effectiveMonthlyRate.innerText = `${monthlyRateValue.toFixed(4) * 100} %`;

    if (additionalCreditsChecked) {
        totalInterestWithAdditionalCreditsContainer.classList.remove('inactive');
        newPeriodInMonthsContainer.classList.remove('inactive');
        amountSavedContainer.classList.remove('inactive');
        
    }
    
    totalResultsContainer.classList.remove('inactive');
}

function showAmountInput(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    if (additionalCredits.checked) {
        additionalCreditsAmountLabel.classList.remove('inactive');
    } else {
        additionalCreditsAmountLabel.classList.add('inactive');
    }
}