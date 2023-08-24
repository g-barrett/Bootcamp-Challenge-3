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
  if ( //all lowercase
    (upperCase === false) &&
    (numeric === false) &&
    (specialChar === false)) {
      var characters2 = characters.substring(10, 36);
      console.log(characters2);
      for (var i = 1; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters2.length + 1);
        password += characters2.charAt(randomNumber);
        console.log(password);
      }
    } else if (  //lowercase, numbers, and special characters
      (upperCase === false) &&
      (numeric === true) &&
      (specialChar === true)) {
        var characters3 = characters.substring(0, 58);
        console.log(characters3);
        for (var i = 1; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * characters3.length + 1);
          password += characters3.charAt(randomNumber);
          console.log(password);
      }
    } else if ( //lowercase and special characters
      (upperCase === false) &&
      (numeric === false) &&
      (specialChar === true)) {
        var characters4 = characters.substring(10, 58);
        console.log(characters4)
        for (var i = 1; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * characters4.length + 1);
          password += characters4.charAt(randomNumber);
        }
    } else if ( //lowercase, uppercase, and special characters
      (upperCase === true) &&
      (numeric === false) &&
      (specialChar === true)) {
        var characters5 = characters.substring(10);
        console.log(characters5)
        for (var i = 1; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * characters5.length + 1);
          password += characters5.charAt(randomNumber);
        }
    } else if (  //lowercase and numbers
      (upperCase === false) &&
      (numeric === true) &&
      (specialChar === false)) {
        var characters6 = characters.substring(0, 36);
        console.log(characters6)
        for (var i = 1; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * characters6.length + 1);
          password += characters6.charAt(randomNumber);
        }
    } else if (  //lowercase, uppercase, and numbers
      (upperCase === true) &&
      (numeric === true) &&
      (specialChar === false)) {
        var characters7 = characters.substring(0, 36) + characters.substring(58);
        console.log(characters7)
        for (var i = 1; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * characters7.length + 1);
          password += characters7.charAt(randomNumber);
        }
    } else if (  //lowercase and uppercase
    (upperCase === true) &&
    (numeric === false) &&
    (specialChar === false)) {
      var characters8 = characters.substring(10, 36) + characters.substring(58);
      console.log(characters8)
      for (var i = 1; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters8.length + 1);
        password += characters8.charAt(randomNumber);
      }
    } else { //all criteria
      for (var i = 1; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length + 1);
        password += characters.charAt(randomNumber);
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