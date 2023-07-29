

var form = document.querySelector("form");
var button = document.querySelector("button");
const email = document.querySelector("input");
var emailError = document.getElementById("response");
form.addEventListener("submit", (event) => {

     if (email.validity.valid) {

        }else{
          msg = showError();
          document.querySelector("#response").textContent = msg;
          email.style.cssText = 'background:hsl(5, 100%, 95%); border-color:red;';
          event.preventDefault();
        }
   });


form.addEventListener("submit", (event) => {

  if (!email.validity.valid) {

    showError();
 
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {

    return emailError = "Email required.";
  } else if (email.validity.typeMismatch) {

    return emailError = "Valid email required";
  } else if (email.validity.tooShort) {

    return emailError = `Email too short`;
  }

 

  // Set the styling appropriately
  emailError.className = "error active";
}
