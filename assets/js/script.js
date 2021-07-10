// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword(){

  const passwordLength = window.prompt("How long would you like your password to be? You may choose any valuebetween 8 and 128 characters.");

  if (!(passwordLength >= 8 && passwordLength <= 128)){
    alert("Please provide a value between 8 and 128 characters.")
    return;
  }

  let passwordMakeup = [];

  let password = "";

  let useLowercase = window.confirm("Would you like to include lowercase letters?");

    if (useLowercase == true){
      passwordMakeup = passwordMakeup.concat(lowercase);
    }

  let useUppercase = window.confirm("Would you like to include uppercase letters?");

    if (useUppercase == true){
      passwordMakeup = passwordMakeup.concat(uppercase);
    }

  let useNumbers = window.confirm("Would you like to include numbers?");

    if (useNumbers == true){
      passwordMakeup = passwordMakeup.concat(numbers);
    }

  let useSymbols = window.confirm("Would you like to include symbols?");

    if (useSymbols == true){
      passwordMakeup = passwordMakeup.concat(symbols);
    }

  if (!useLowercase && !useUppercase && !useNumbers && !useSymbols){
    window.alert("One of the 4 criteria must be selected to continue.")
    return;
  }

  while (password.length < passwordLength){
    let randomChoice = passwordMakeup[Math.floor(Math.random() * passwordMakeup.length)]
    password += randomChoice
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
