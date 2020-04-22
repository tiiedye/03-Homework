// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays
var generatePassword = [];

// Write password to the #password input
function writePassword() {
  var lower = confirm("use lower case letters?")
  if (lower) {
    generatePassword.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
