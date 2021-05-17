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

const generatePassword = (
  limit,
  wantLowerCase,
  wantUpperCase,
  wantSpecialChar,
  wantNumbers
) => {
  let randomPasswordCharacters = [];

  const action = [
    wantUpperCase && "0",
    wantLowerCase && "1",
    wantNumbers && "2",
    wantSpecialChar && "3",
  ].filter((item) => {
    if (item) return item;
  });

  for (let x = 0; x < limit; x++) {
    const randomNum = generateRandomNum(action.length);

    const actionNumber = parseInt(action[randomNum]);

    switch (actionNumber) {
      case 0:
        //random
        let randomUpcaseNum = generateRandomNum(25);
        let upperCaseLetter = upperCaseLetters[randomUpcaseNum];
        randomPasswordCharacters.push(upperCaseLetter);
        break;
      case 1:
        // random lowercase
        let randomLoCaseNum = generateRandomNum(25);
        let loCaseletter = lowerCaseLetters[randomLoCaseNum];
        randomPasswordCharacters.push(loCaseletter);
        break;
      case 2:
        // Random number
        let randomNumNum = generateRandomNum(9);
        let randomNumNumNum = numbers[randomNumNum];
        randomPasswordCharacters.push(randomNumNumNum);
        break;
      case 3:
        // Special charaters
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

  let wantUpperCase = confirm("Would you like Upper case letters?");

  let wantLowerCase = confirm("Would you like Lower case letters?");

  let wantSpecialChar = confirm("Would you like Special characters?");

  let wantNumbers = confirm("Would you like to use numbers?");

  const wantedArray = [
    wantUpperCase,
    wantLowerCase,
    wantSpecialChar,
    wantNumbers,
  ].filter((i) => {
    if (i) return i;
  });

  if (wantedArray.length <= 1) {
    alert("Please select at least two types of characters for your password!");
    writePassword();
  } else {
    if (howLongIsPassword !== "") {
      let password = generatePassword(
        howLongIsPassword,
        wantLowerCase,
        wantUpperCase,
        wantSpecialChar,
        wantNumbers
      );
      let passwordText = document.querySelector("#password");

      passwordText.value = password;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
