// Assignment code here
let upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "g",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  ";",
  ":",
  "<",
  ">",
  "?",
  "/",
];

const generateRandomNum = (num) => {
  return Math.floor(Math.random() * num);
};

const generatePassword = (limit) => {
  let randomPasswordCharacters = [];
  for (let x = 0; x < limit; x++) {
    let randomNum = generateRandomNum(4);

    switch (randomNum) {
      case 0:
        let randomUpcaseNum = generateRandomNum(25);
        let upperCaseLetter = upperCaseLetters[randomUpcaseNum];
        randomPasswordCharacters.push(upperCaseLetter);
        break;
      case 1:
        let randomLoCaseNum = generateRandomNum(25);
        let loCaseletter = lowerCaseLetters[randomLoCaseNum];
        randomPasswordCharacters.push(loCaseletter);
        break;
      case 2:
        let randomNumNum = generateRandomNum(9);
        let randomNumNumNum = numbers[randomNumNum];
        randomPasswordCharacters.push(randomNumNumNum);
        break;
      case 3:
        let randomSpecialChar = generateRandomNum(23);
        let randomSpecialCharacter = specialChar[randomSpecialChar];
        randomPasswordCharacters.push(randomSpecialCharacter);
        break;
      default:
        throw new Error("Unknown number given");
    }
  }

  return randomPasswordCharacters.join("");
};

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let howLongIsPassword = prompt(
    "How long would you like your password to be? Please enter in a number between 8 and 128"
  );
  if (howLongIsPassword < 8 || howLongIsPassword > 128) {
    alert("Please enter a number between prompted numbers");
    writePassword();
  }

  let wantLowerCase = confirm("Would you like Lower case letters?");

  let wantUpperCase = confirm("Would you like Upper case letters?");

  let wantSpecialChar = confirm("Would you like Special characters?");

  if (howLongIsPassword !== "") {
    let password = generatePassword(howLongIsPassword);
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
