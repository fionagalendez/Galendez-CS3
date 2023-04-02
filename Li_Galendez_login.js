function validate() {
  // Get the username and password input fields
  var usernameField = document.getElementById("usernamefield");
  var passwordField = document.getElementById("passwordfield");

  // Get the error message elements
  var usernameError = document.getElementById("usernameerror");
  var passwordError = document.getElementById("passworderror");
  var messageError = document.getElementById("messageerror");

  // Initialize the error messages
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";
  messageError.innerHTML = "";

  // Check if the username field is empty
  if (usernameField.value.trim() === "") {
    usernameError.innerHTML = "Please enter your username.";
    messageError.innerHTML = "Please enter your username and password.";
    console.error("Login error.");
    return false;
  }

  // Check if the password field is empty
  if (passwordField.value.trim() === "") {
    passwordError.innerHTML = "Please enter your password.";
    messageError.innerHTML = "Please enter your username and password.";
    console.error("Login error.");
    return false;
  }

  return true;
}
