// SCPC JS
//task-----------------------------------------------------------------------1
function reverseString(inputStr) {
  let reversedStr = '';
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr += inputStr[i];
  }
  return reversedStr;
}

let inputStr = "hello world";
let outputString = reverseString(inputStr);
console.log(outputString); // Output: "dlrow olleh"


// task-----------------------------------------------------------------------2
function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let inputNumber = [2, -5, 10, -3, 7];
let outputSum = sumOfPositiveNumbers(inputNumber);
console.log(outputSum); // Output: 19

// task-----------------------------------------------------------------------3
function findMostFrequent(inputArray) {
  let elementCount = {};

  for (let num of inputArray) {
    if (elementCount[num]) {
      elementCount[num]++;
    } else {
      elementCount[num] = 1;
    }
  }

  let mostFrequentElement;
  let maxCount = 0;
  for (let num in elementCount) {
    if (elementCount[num] > maxCount) {
      maxCount = elementCount[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

let inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
let mostFrequent = findMostFrequent(inputArray);
console.log("The most frequent element is: " + mostFrequent); // Output: 3

// task------------------------------------------------------------------------4
function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  for (let i = 0; i < arr.length; i++)
  {
    let right = left + 1;
    const sum = arr[left] + arr[right];

    if (sum == target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no such pair is found
  return [];
}


const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

const result = findTwoNumbersWithSum(sortedArray, targetValue);
console.log(result);


// task-------------------------------------------------------------------------5
function calculate(num1, operator, num2) {
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    console.log('Invalid operator');
    return;
  }

  return result;
}
let num1 = 10;
let num2 = 5;
let operator = '+';
console.log(calculate(num1, operator, num2)); // Output: 15

operator = '-';
console.log(calculate(num1, operator, num2)); // Output: 5

operator = '*';
console.log(calculate(num1, operator, num2)); // Output: 50

operator = '/';
console.log(calculate(num1, operator, num2)); // Output: 2

// operator = '%'; // Invalid operator
// console.log(calculate(num1, operator, num2)); // Output: Invalid operator

// task------------------------------------------------------------6

function generateRandomPassword(length) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()-=_+[]{}|;:,.<>?';

  let allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}

const passwordLength = 12; 
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword); 

// task------------------------------------------------------7
function romanToInt(romanNumeral) {
  // Convert the romanNumeral to uppercase
  romanNumeral = romanNumeral.toUpperCase();

  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeral = romanNumerals[romanNumeral[i]];
    const nextNumeral = romanNumerals[romanNumeral[i + 1]];

    if (nextNumeral && nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i++; // Skip the next numeral since it has already been accounted for
    } else {
      result += currentNumeral;
    }
  }

  return result;
}



const romanNumber = romanToInt('xx');
console.log(romanNumber)