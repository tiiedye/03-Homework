// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays
  var generatePassword = [];

//function to generate password
    function writePassword() {
      var lower = confirm("use lower case letters?")
      if (lower) {
        generatePassword.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
      }
  
      var upper = confirm("use UPPER case letters?")
      if (upper) {
        generatePassword.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
      }
  
      var special = confirm("use special symbols?")
      if (special) {
        generatePassword.push("!", "@", "#", "$", "%", "^", "&", "*")
      }
  
      var numeric = confirm("use numbers?")
      if (numeric) {
        generatePassword.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
      }
      
      var password = "";

      for (var i = 0; i < 10; i++) {
      password += generatePassword[Math.floor(Math.random() * generatePassword.length)];
      }

      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
      
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);