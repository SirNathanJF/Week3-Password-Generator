// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assigns lowercase letters to an array
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Assigns uppercase letters to an array
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Assigns numbers to an array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Assigns symbols/special characters to an array
let symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

//beings the function generate password
function generatePassword(){

  //Assigns the variable passwordLength to be the user input from the prompt
  const passwordLength = window.prompt("How long would you like your password to be? You may choose any valuebetween 8 and 128 characters.");

  //Adds alert if a value outside of the specified length is chosen, return to start.
  if (!(passwordLength >= 8 && passwordLength <= 128)){
    alert("Please provide a value between 8 and 128 characters.")
    return;
  }

  //Assigns variable passwordMakeup to an array that will be added to later
  let passwordMakeup = [];

  //Assigs variable password to be blank for later input
  let password = "";

  //Adds a confirmation box for lower case letters, and tells the function to add lowercase array to password makeup
  let useLowercase = window.confirm("Would you like to include lowercase letters?");

    if (useLowercase == true){
      passwordMakeup = passwordMakeup.concat(lowercase);
    }

  //Adds a confirmation box for upper case letters, and tells the function to add uppercase array to password makeup
  let useUppercase = window.confirm("Would you like to include uppercase letters?");

    if (useUppercase == true){
      passwordMakeup = passwordMakeup.concat(uppercase);
    }

  //Adds a confirmation box for numbers, and tells the function to add numbers array to password makeup  
  let useNumbers = window.confirm("Would you like to include numbers?");

    if (useNumbers == true){
      passwordMakeup = passwordMakeup.concat(numbers);
    }

  //Adds a confirmation box for symbols, and tells the function to add symbols array to password makeup   
  let useSymbols = window.confirm("Would you like to include symbols?");

    if (useSymbols == true){
      passwordMakeup = passwordMakeup.concat(symbols);
    }

  //Adds an alert if no options are chosen, returns to beginning.  
  if (!useLowercase && !useUppercase && !useNumbers && !useSymbols){
    window.alert("One of the 4 criteria must be selected to continue.")
    return;
  }

  //Adds a while loop to generate password, returns password string.
  while (password.length < passwordLength){
    let randomChoice = passwordMakeup[Math.floor(Math.random() * passwordMakeup.length)]
    password += randomChoice
  }

  return password;
}

//Creates a function for write password which calls the password generate function and queries the password id in the HTML
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//My personal addition of button for copy to clipboard, adds even listener for button and queries HTML for the copy id.
let copyToClip = document.querySelector("#copy");
copy.addEventListener("click", function(){
  copyPassword();
});

//Adds function copyPassword and allows the copy button to work, adds an alert for successful copy
function copyPassword(){
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!"); 
}
