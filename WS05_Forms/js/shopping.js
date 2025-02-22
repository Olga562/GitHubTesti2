// shopping.js

//exercise 1
function checkInput(){
    
    var x = document.getElementById("email");
    var y = document.getElementById("comment");

    if(x.value.length < 6 || x.value.length > 15 || x.value.indexOf("@") < 0){
        x.style.borderColor = "red";
        const addi = document.createElement("span");
        addi.innerHTML = "Wrong input!";
        x.parentNode.appendChild(addi);
        return false;
    }else if(y.value.length > 50){
        y.style.borderColor = " red";
        const addi1 = document.createElement("span");
        addi1.innerHTML = "Way to long!";
        y.parentNode.appendChild(addi1);
        return false;
    }else{
        alert(x.value + " kirjoitti " + y.value);
        }
        
            
        }

        // exercise 2

        document.getElementById("submit").addEventListener("click", function(event){
            event.preventDefault();
            let type = document.getElementById("type").value;
            let years = parseInt(document.getElementById("years").value);

            let price = 0;

            if(type == "basic"){
                price = 10;
            }else if(type == "premium"){
                price = 15;
            }else if(type == "gold"){
                price = 20;
            }else if(type =="platinum"){
                price = 25;
            }

            let totalCost = price * years;
            let message = "";

            if(years > 2){
                totalCost *= 0.8;
                message = "You got a 20% discount!";
            }
            if(years >= 5){
                totalCost -= 5;
                message += " Plus you got an extra 5€ discount!";
            }

            document.getElementById("cost").value = `$${totalCost.toFixed(2)}`;
            document.getElementById("discountMessage").innerText = message;
        })
   
    

    
// exercise 3
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    'use strict';

    // For storing the order total:
    var total;

    // Get references to the form values:
    var quantity = parseInt(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var discount = parseFloat(ocument.getElementById('discount').value);
    var shipping = parseFloat(document.getElementById('shipping').value);

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("total after tax: " + total);

    // Factor in the discount:
    if (quantity > 100) {
        total = total - (2 * discount);
    } else {

        total = total - discount;
    }
    total = total + (1.0 * shipping);
    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    // Display the total:
    document.getElementById('total').value = total;

    // Return false to prevent submission:
    return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    /* if(theForm.addEventListener){
        theForm.addEventListener("submit", code ,false);
    } */
   theForm.addEventListener("submit", function(event){
    event.preventDefault();
    checkMethod();
   })


} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;

function showContactField(){
    document.getElementById('emailField').style.display = 'none';
    document.getElementById('phoneField').style.display = 'none';
    document.getElementById('smsField').style.display = 'none';

    var contactMethod = document.getElementById("contactMethod").value;

    if(contactMethod == "email"){
        document.getElementById("emailField").style.display = "block";
    }else if(contactMethod=="phone"){
        document.getElementById("phoneField").style.display = "block";
    }else if(contactMethod == "sms"){
        document.getElementById("smsField").style.display = "block";
    }
}

function checkMethod(){

}