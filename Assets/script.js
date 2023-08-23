//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Assignment code here
function generatePassword() {
  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()`~.-_/;:[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";
  var passwordLength = window.prompt("How many characters would you like in your password? (8-128)");
  console.log(passwordLength);
  var upperCase = window.confirm("Would you like to include uppercase letters?");
  console.log(upperCase);
  var numeric = window.confirm("Would you like to include numbers?");
  console.log(numeric);
  var specialChar = window.confirm("Would you like to include special characters?");
  console.log(specialChar);
  if (
    (upperCase === true) ||
    (numeric === true) ||
    (specialChar === true)) {
      for (var i = 1; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length + 1);
        password += characters.charAt(randomNumber);
        console.log(password);
      }
    } else if ( //this is not working currently
      (upperCase === false) ||
      (numeric === true) ||
      (specialChar === true)) {
        var characters2 = characters.substring(0, 58);
        console.log(characters2);
        for (var i = 1; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * characters2.length + 1);
          password += characters2.charAt(randomNumber);
          console.log(password);
      }
    }
    return password;
} 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* WORK CITED

https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/#
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference


*/