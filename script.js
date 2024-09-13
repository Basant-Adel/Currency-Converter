document.getElementById('convert').onclick = function() {

    // Get the input amount from the user
    var amount = document.getElementById('input').value;

    // Get the selected currencies
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;

    // Error handling if no amount is entered
    if (amount == '') {
        var error = 'Please Enter a Valid Number';
        document.getElementById('result').classList.remove('alert-success');
        document.getElementById('result').classList.add('alert-danger');
        document.getElementById('result').innerHTML = error;
    } else {
        // Remove error message and add success class for the result
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').classList.remove('alert-danger');
        document.getElementById('result').classList.add('alert-success');

        // Define conversion rates
        var conversionRates = {
            EGP: { USD: 0.021, EUR: 0.019, EGP: 1 },
            USD: { EGP: 48.56, EUR: 0.9, USD: 1 },
            EUR: { EGP: 53.72, USD: 1.11, EUR: 1 },
        };

        // Calculate the converted amount
        var convertedAmount = amount * conversionRates[fromCurrency][toCurrency];

        // Display the result
        var result = 'Result = ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
        document.getElementById('result').innerHTML = result;
    }
};