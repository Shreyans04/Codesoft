function calculate() {
    var currentValue = document.forms[0].display.value;
    var result = parseFloat(currentValue);
    
    if (!isNaN(result)) {
        document.forms[0].display.value = result;
    } else {
        // Handle invalid input, such as attempting to divide by zero
        alert('Invalid input');
        clearDisplay();
    }
}