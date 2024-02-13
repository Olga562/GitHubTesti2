// shopping1.js
// Function called when the form is submitted.

function validateFields() {

    var retVal = true;
    var email = document.getElementById("email");
    var comments = document.forms.myForm.comment;
    let feed1 = document.getElementById("feedback1");
    if (email.value == null || email.value.length < 6 || email.value.length > 15 || email.value.indexOf("@") < 0) {
        email.parentNode.parentNode.classList.add("error");
        feed1.innerHTML = "Email length is not correct or @-sign is missing";
        retVal = false;
    } else {
        document.getElementById("feedback1").innerHTML = "";
        email.parentNode.parentNode.classList.remove("error");
    }
    if (comments.value == null || comments.value.length < 1) {
        comments.parentNode.classList.add("error");
        document.getElementById("feedback2").innerHTML = "Comments field cannot be empty";
        retVal = false;
    } else {
        if (retVal) {
            comments.parentNode.classList.remove("error");
            let text = comments.value.substring(0, 49);
            alert("Comments:\n" + text + "\n\nemail:" + email.value);
        }
    }
    return retVal;