// Assignment code here
function generatePassword() {
var passwordLength = window.prompt(" Please enter a number between 8 and 128 ")
var passwordSpecialCharacter = window.confirm(" Would you like to use a special character? ")
var passwordLowerCase = window.confirm( "Would you like to include lower case characters? ")
var passwordUpperCase = window.confirm( "Would you like to include upper case characters? ")
var passwordNumbers = window.confirm( "Would you like to include numbers? ")
var numberCharacters = "1234567890"
var specialCharacters = "!@#$%&*?"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var possibleCharacters = ""

if (passwordSpecialCharacter === true) {
  possibleCharacters = possibleCharacters + specialCharacters
}

if (passwordLowerCase === true) {
  possibleCharacters = possibleCharacters + lowerCase
}

if (passwordUpperCase === true) {
  possibleCharacters = possibleCharacters + upperCase
}

if (passwordNumbers === true) {
  possibleCharacters = possibleCharacters + numberCharacters 
}

var password = ""
for(var i=0; i < passwordLength; i++) {
  password =  password + possibleCharacters.charAt(Math.floor(Math.random()* possibleCharacters.length))
}

return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
