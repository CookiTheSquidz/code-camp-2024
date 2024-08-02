var email = prompt("enter your email");
function checkemail(){
    if (email.length < 1) {
        alert( "E-mail cannot be blank. Try Again");
} else {
    alert("Thanks! We'll spam you at " + email);
}
}
checkemail()