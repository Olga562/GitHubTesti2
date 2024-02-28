// This script is called when FORM is submitted and it calculates an order total. 
function calculate() {
    // use strict is to prevent the use of undeclared variables
    'use strict';

    // For storing the order total:
    var total;

    // Get references from the form values:
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
    var shipping = document.getElementById('shipping').value;

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    // Log the total before tax to the console:
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    // Log the total after tax to the console:
    console.log("total after tax: " + total);

    // Factor in the discount:
    // If the quantity is greater than 100, apply a discount of 2 times the discount value
    if (quantity > 100) {
        total = total - (2 * discount);
    }
    // Otherwise, apply a discount of the discount value
    else {
        total = total - discount;
    }
    // add the shipping cost to the total pultiply by 1.0 to convert the string to a number
    total = total + (1.0 * shipping);
    // Log the total after discount to the console:
    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    // Display the total:
    document.getElementById('total').value = total;

    // Return false to prevent submission:
    return false;

} // End of calculate() function.

// Function called when the window has been loaded. Function adds an event listener to the form.
function init() {
    'use strict';
    // Add an event listener to the form:
    var theForm = document.getElementById('submit-calculate');
    theForm.addEventListener('click', calculate, false);
    console.log("form event listener added");

}

// Assign an event listener to the window's load event:
window.onload = init();