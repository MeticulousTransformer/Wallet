import Bank from "./bankAccount";
const fs = require("fs");

function register() {
  var username = document.getElementById("regUsername").value;
  var password = document.getElementById("regPassword").value;
  // Perform validation if needed
  // For simplicity, we're not doing validation here
  const newObject = new Bank(username, password);

  // Save the username and password in JSON (mini database for now)

  // Display sign-in form
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("signInForm").style.display = "block";
}

function signIn() {
  var username = document.getElementById("signInUsername").value;
  var password = document.getElementById("signInPassword").value;
  // Perform validation if needed
  // For simplicity, we're not doing validation here

  // Retrieve password from localStorage
  var storedPassword = localStorage.getItem(username);

  // Check if the stored password matches the input password
  if (storedPassword === password) {
    alert("Sign In Successful!");
    // Redirect to another page or perform other actions
  } else {
    alert("Incorrect Username or Password");
  }
}
