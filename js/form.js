
const loginContainer = document.querySelector(".login-container");
const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");

const loginPassword = document.getElementById("loginPassword");

const showPasswordIcon = document.querySelector("i.fa-eye");

showPasswordIcon.addEventListener("click", showPassword);

// *Show Hide Password
function showPassword() {
  
  if (loginPassword.type === "password") {
    loginPassword.type = "text";
    showPasswordIcon.style.color = "red";
  } else {
    loginPassword.type = "password";
    showPasswordIcon.style.color = "#ddd";
  }
}
//Validation

loginForm.addEventListener("submit", submitValidation);

function submitValidation(event) {
  
  if (loginUsername.value === "" || loginUsername.value.length < 3) {
    
    showError(loginUsername, "User name can not be empty & must be > 3");
    event.preventDefault();
  } else {
    
    showSuccess(loginUsername);
  }
  //   Password validation

  if (loginPassword.value === "" || loginPassword.value.length < 6) {
    
    showError(loginPassword, "Password can not be empty or less than 6");
    event.preventDefault();
  } else {
    
    showSuccess(loginPassword);
  }
}

// Show error Message
function showError(input, message) {
  const formField = input.parentElement;
  
  formField.className = "form-field error";
  if ((formField.className = "form-field error")) {
    const alert_message = formField.querySelector(".alert-message");
    alert_message.style.visibility = "visible";
    alert_message.style.color = "red";
    alert_message.innerText = message;
  }
}
function showSuccess(input) {
  const formField = input.parentElement;
  formField.className = "form-field success";
  if ((formField.className = "form-field success")) {
    const alert_message = formField.querySelector(".alert-message");
    alert_message.style.visibility = "hidden";
  }
}

const button = document.getElementById("linkLorem");
button.onclick = function(){
location.href="index.html";
};



